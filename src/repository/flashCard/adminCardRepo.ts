import type { FlashCard } from "../../types/flashcard";

export const adminCardRepo = {
  getCards() {
    return [] as FlashCard[];
  },

  useCards() {
    return [] as FlashCard[];
  },

  getById() {
    return undefined;
  },

  create() {},

  update() {},

  delete() {},
};
