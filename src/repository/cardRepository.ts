// src/repository/cardRepository.ts
import { useModeStore } from "../store/modeStore";
import { demoCardRepo } from "./flashCard/demoCardRepo";
import { adminCardRepo } from "./flashCard/adminCardRepo";
import type { FlashcardFilters } from "../types/cardFilter";

export const cardRepository = {
  useCards(filters: FlashcardFilters = {}) {
    const mode = useModeStore((s) => s.mode); //  real hook, always called
    const demoCards = demoCardRepo.useCards(filters); //  always called
    const adminCards = adminCardRepo.useCards(filters); //  always called

    return mode === "demo" ? demoCards : adminCards; // only the RETURN is conditional
  },

  useCreateCard() {
    const mode = useModeStore((s) => s.mode);
    const demoMutation = demoCardRepo.useCreateCard(); //  always called
    const adminMutation = adminCardRepo.useCreateCard(); //  always called

    return mode === "demo" ? demoMutation : adminMutation;
  },

  useUpdateCard() {
    const mode = useModeStore((s) => s.mode);
    const demoMutation = demoCardRepo.useUpdateCard();
    const adminMutation = adminCardRepo.useUpdateCard();

    return mode === "demo" ? demoMutation : adminMutation;
  },

  useDeleteCard() {
    const mode = useModeStore((s) => s.mode);
    const demoMutation = demoCardRepo.useDeleteCard();
    const adminMutation = adminCardRepo.useDeleteCard();

    return mode === "demo" ? demoMutation : adminMutation;
  },
};
