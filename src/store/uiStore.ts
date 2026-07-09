import { create } from "zustand";

export type ModalType = "add-card" | "search" | "settings";

interface UIStore {
  activeModal: ModalType | null;

  openModal: (modal: ModalType) => void;

  closeModal: () => void;
}

export const useUIStore = create<UIStore>((set) => ({
  activeModal: null,

  openModal: (modal) =>
    set({
      activeModal: modal,
    }),

  closeModal: () =>
    set({
      activeModal: null,
    }),
}));
