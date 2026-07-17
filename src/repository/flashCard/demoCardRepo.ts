import { useMutation } from "@tanstack/react-query";
import { useCardStore } from "../../store/demoCardStore";
import type { FlashCard } from "../../types/flashcard";
import type { FlashcardFilters } from "../../types/cardFilter";

export const demoCardRepo = {
  getCards(filters: FlashcardFilters = {}) {
    let cards = useCardStore.getState().cards;
    if (filters.projectId)
      cards = cards.filter((c) => c.projectId === filters.projectId);
    if (filters.mistakeOnly) cards = cards.filter((c) => c.mistake);
    if (filters.random) cards = [...cards].sort(() => Math.random() - 0.5);
    return cards;
  },

  useCards(filters: FlashcardFilters = {}) {
    let cards = useCardStore((state) => state.cards);
    if (filters.projectId)
      cards = cards.filter((c) => c.projectId === filters.projectId);
    if (filters.mistakeOnly) cards = cards.filter((c) => c.mistake);
    if (filters.random) cards = [...cards].sort(() => Math.random() - 0.5);

    // Same shape as adminCardRepo.useCards so the caller doesn't need to
    // know which mode it's in. Demo is Zustand — never actually "loading".
    return { data: cards, isLoading: false };
  },

  getById(id: string) {
    return useCardStore.getState().cards.find((card) => card.id === id);
  },

  useCreateCard() {
    return useMutation({
      mutationFn: async (card: Omit<FlashCard, "id" | "createdAt">) => {
        const newCard: FlashCard = {
          ...card,
          id: crypto.randomUUID(),
          createdAt: new Date().toISOString(),
        };
        useCardStore.getState().addCard(newCard);
        return newCard;
      },
    });
  },

  useUpdateCard() {
    return useMutation({
      mutationFn: async ({
        id,
        changes,
      }: {
        id: string;
        changes: Partial<FlashCard>;
      }) => {
        useCardStore.getState().updateCard(id, changes);
      },
    });
  },

  useDeleteCard() {
    return useMutation({
      mutationFn: async (id: string) => {
        useCardStore.getState().deleteCard(id);
      },
    });
  },
};
