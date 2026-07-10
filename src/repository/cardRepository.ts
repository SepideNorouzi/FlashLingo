import { useModeStore } from "../store/modeStore";

import { demoCardRepo } from "./flashCard/demoCardRepo";
import { adminCardRepo } from "./flashCard/adminCardRepo";

import type { FlashCard } from "../types/flashcard";
import type { FlashcardFilters } from "../types/cardFilter";

function repo() {
  return useModeStore.getState().mode === "demo" ? demoCardRepo : adminCardRepo;
}

export const cardRepository = {
  getCards(filters: FlashcardFilters = {}) {
    return repo().getCards(filters);
  },

  useCards(filters: FlashcardFilters = {}) {
    return repo().useCards(filters);
  },

  getById(id: string) {
    return repo().getById(id);
  },

  create(card: FlashCard) {
    return repo().create(card);
  },

  update(id: string, changes: Partial<FlashCard>) {
    return repo().update(id, changes);
  },

  delete(id: string) {
    return repo().delete(id);
  },
};
