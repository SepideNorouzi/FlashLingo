import { useSearchParams } from "react-router";
import { useFlashcards } from "../hooks/useCards";

export default function FlashcardPage() {
  const [searchParams] = useSearchParams();

  const projectId = searchParams.get("projectId") ?? undefined;

  const { cards } = useFlashcards({
    projectId,
  });

  return (
    <>
      {cards.map((card) => (
        <div key={card.id}>{card.word}</div>
      ))}
    </>
  );
}
