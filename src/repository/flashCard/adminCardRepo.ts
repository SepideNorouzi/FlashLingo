import type { FlashCard } from "../../types/flashcard";
import type { FlashcardFilters } from "../../types/cardFilter";

export const adminCardRepo = {
  getCards(filters: FlashcardFilters = {}) {
    return [];
  },

  getById(id: string) {
    return undefined;
  },

  create(card: FlashCard) {},

  update(id: string, changes: Partial<FlashCard>) {},

  delete(id: string) {},
};
