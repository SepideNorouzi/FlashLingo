import { create } from "zustand";
import { mockFlashcards } from "../data/mockCards";
import { type FlashCard } from "../types/flashcard";

interface CardStore {
  cards: FlashCard[];

  setCards: (cards: FlashCard[]) => void;

  addCard: (card: FlashCard) => void;

  updateCard: (id: string, changes: Partial<FlashCard>) => void;

  deleteCard: (id: string) => void;

  resetCards: () => void;
}

export const useCardStore = create<CardStore>((set) => ({
  cards: [],

  setCards: (cards) =>
    set({
      cards,
    }),

  addCard: (card) =>
    set((state) => ({
      cards: [...state.cards, card],
    })),

  updateCard: (id, changes) =>
    set((state) => ({
      cards: state.cards.map((card) =>
        card.id === id ? { ...card, ...changes } : card,
      ),
    })),

  deleteCard: (id) =>
    set((state) => ({
      cards: state.cards.filter((card) => card.id !== id),
    })),

  resetCards: () =>
    set({
      cards: structuredClone(mockFlashcards),
    }),
}));
