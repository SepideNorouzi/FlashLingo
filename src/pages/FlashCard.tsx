import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

import { useFlashcards } from "../hooks/useCards";
import { useProjects } from "../hooks/useProjects";

import CardHeader from "../components/flashCard/CardHeader";
import CardViewer from "../components/flashCard/CardViewer";
import SessionComplete from "../components/flashCard/SessionComplete";
import { useCardSession } from "../hooks/useCardsSession";
import NoFlashcards from "../components/flashCard/NoFlashcards";
import Loading from "../components/Loading"; // same one ProtectedRoutes uses
import type { FlashCard } from "../types/flashcard";

function FlashcardPage() {
  const [searchParams] = useSearchParams();

  const projectId = searchParams.get("projectId") ?? undefined;
  const mode = searchParams.get("mode") ?? undefined;

  const { cards: liveCards, isLoading } = useFlashcards({
    projectId,
    mistakeOnly: mode === "mistakes",
  });

  // Freeze the list for this session — but only once real data has landed.
  // Demo: isLoading is always false, so this fires on the first render.
  // Admin: wait for api to actually respond before
  // taking the snapshot, so never lock in an empty placeholder array.
  const [cards, setCards] = useState<FlashCard[] | null>(null);

  useEffect(() => {
    if (!isLoading && cards === null) {
      setCards(liveCards);
    }
  }, [isLoading, liveCards, cards]);

  const {
    currentCard,
    currentIndex,
    isFinished,
    correctCount,
    wrongCount,
    onCorrect,
    onWrong,
  } = useCardSession(cards ?? []);

  const { getProject } = useProjects();
  const project = projectId ? getProject(projectId) : undefined;

  if (cards === null) {
    return <Loading />;
  }

  if (!cards.length) {
    return <NoFlashcards />;
  }

  if (isFinished) {
    return <SessionComplete correct={correctCount} wrong={wrongCount} />;
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col px-5 py-6 md:px-10">
      <CardHeader current={currentIndex + 1} total={cards.length} />
      <div className="flex flex-1 items-center justify-center">
        <CardViewer
          card={currentCard!}
          onCorrect={onCorrect}
          onWrong={onWrong}
          projectName={project ? project.name : "Mixed Review"}
        />
      </div>
    </main>
  );
}

export default FlashcardPage;
