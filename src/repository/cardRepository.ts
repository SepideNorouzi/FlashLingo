import { useModeStore } from "../store/modeStore";
import { adminCardRepo } from "./flashCard/adminCardRepo";
import { demoCardRepo } from "./flashCard/demoCardRepo";
import { type FlashCard } from "../types/flashcard";

function repo() {
  return useModeStore.getState().mode === "demo" ? demoCardRepo : adminCardRepo;
}

export const cardRepository = {
  getCards(filters = {}) {
    return repo().getCards(filters);
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
