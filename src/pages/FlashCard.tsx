import { useState } from "react";
import { useSearchParams } from "react-router";

import { useFlashcards } from "../hooks/useCards";
import { useProjects } from "../hooks/useProjects";

import CardHeader from "../components/flashCard/CardHeader";
import CardViewer from "../components/flashCard/CardViewer";
import SessionComplete from "../components/flashCard/SessionComplete";
import { useCardSession } from "../hooks/useCardsSession";
import NoFlashcards from "../components/flashCard/NoFlashcards";

function FlashcardPage() {
  const [searchParams] = useSearchParams();

  const projectId = searchParams.get("projectId") ?? undefined;
  const mode = searchParams.get("mode") ?? undefined;

  const { cards: liveCards } = useFlashcards({
    projectId,
    mistakeOnly: mode === "mistakes",
  });

  // Freeze the list for this review session.
  // The lazy initializer `() => liveCards` runs ONCE, on mount — not on
  // every re-render. So when a store update (marking a card right/wrong)
  // would otherwise reshuffle or shrink the live `mistakeOnly` filter,
  // this `cards` array stays exactly as it was when the session started.
  // currentIndex can now safely walk it start to finish.
  const [cards] = useState(() => liveCards);

  const {
    currentCard,
    currentIndex,
    isFinished,
    correctCount,
    wrongCount,
    onCorrect,
    onWrong,
  } = useCardSession(cards);

  const { getProject } = useProjects();

  const project = projectId ? getProject(projectId) : undefined;

  if (!cards.length) {
    return <NoFlashcards />;
  }

  if (isFinished) {
    return <SessionComplete correct={correctCount} wrong={wrongCount} />;
  }

  return (
    <main
      className="
      mx-auto
      flex
      min-h-screen
      max-w-6xl
      flex-col
      px-5
      py-6
      md:px-10
    "
    >
      <CardHeader current={currentIndex + 1} total={cards.length} />

      <div
        className="
    flex
    flex-1
    items-center
    justify-center
  "
      >
        <CardViewer
          card={currentCard}
          onCorrect={onCorrect}
          onWrong={onWrong}
          projectName={project ? project.name : "Mixed Review"}
        />
      </div>
    </main>
  );
}

export default FlashcardPage;
