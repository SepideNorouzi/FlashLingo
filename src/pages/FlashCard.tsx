import { useSearchParams } from "react-router";

import { useFlashcards } from "../hooks/useCards";
import { useProjects } from "../hooks/useProjects";

import CardHeader from "../components/flashCard/CardHeader";
import CardViewer from "../components/flashCard/CardViewer";
import SessionComplete from "../components/flashCard/SessionComplete";
import { useCardSession } from "../hooks/useCardsSession";

function FlashcardPage() {
  const [searchParams] = useSearchParams();

  const projectId = searchParams.get("projectId") ?? undefined;
   const mode = searchParams.get("mode") ?? undefined;  

  const { cards } = useFlashcards({
    projectId,
    mistakeOnly: mode === "mistakes",                       
  });

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
    return <div>No flashcards yet.</div>;
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
          projectName={project?.name ?? "Unknown Project"}
        />
      </div>
    </main>
  );
}

export default FlashcardPage;
