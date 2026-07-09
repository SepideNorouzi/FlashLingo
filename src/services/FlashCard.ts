import { mockFlashcards } from "../data/mockCards";
import { type FlashcardFilters } from "../types/cardFilter";

export const flashcardService = {
  getCards(filters: FlashcardFilters = {}) {
    let cards = [...mockFlashcards];

    if (filters.projectId) {
      cards = cards.filter((card) => card.projectId === filters.projectId);
    }

    if (filters.mistakeOnly) {
      cards = cards.filter((card) => card.mistake);
    }

    if (filters.random) {
      cards.sort(() => Math.random() - 0.5);
    }

    return cards;
  },
};
