import { cardRepository } from "../repository/cardRepository";
import type { FlashcardFilters } from "../types/cardFilter";

export function useFlashcards(filters: FlashcardFilters = {}) {
  const { data: cards, isLoading } = cardRepository.useCards(filters);

  const totalCards = cards.length;
  const mistakeCards = cards.filter((card) => card.mistake).length;
  const reviewCards = cards.filter(
    (card) => !card.learned || card.mistake,
  ).length;

  return { cards, totalCards, mistakeCards, reviewCards, isLoading };
}
