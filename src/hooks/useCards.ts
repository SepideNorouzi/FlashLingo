import { flashcardService } from "../services/FlashCard";
import type { FlashcardFilters } from "../types/cardFilter";

export function useFlashcards(filters: FlashcardFilters = {}) {
  const cards = flashcardService.getCards(filters);
  // later when repository exists :
  // const cards = repository.getCards(filters);

  const totalCards = cards.length;

  const mistakeCards = cards.filter((card) => card.mistake).length;

  const reviewCards = cards.filter(
    (card) => !card.learned || card.mistake,
  ).length;

  return {
    cards,
    totalCards,
    mistakeCards,
    reviewCards,
  };
}
