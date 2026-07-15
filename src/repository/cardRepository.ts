import { useModeStore } from "../store/modeStore";

import { demoCardRepo } from "./flashCard/demoCardRepo";
import { adminCardRepo } from "./flashCard/adminCardRepo";

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

  useCreateCard() {
    return repo().useCreateCard();
  },

  useUpdateCard() {
    return repo().useUpdateCard();
  },

  useDeleteCard() {
    return repo().useDeleteCard();
  },
};
