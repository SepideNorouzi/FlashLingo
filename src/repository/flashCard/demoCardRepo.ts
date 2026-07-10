import { useCardStore } from "../../store/demoCardStore";
import type { FlashCard } from "../../types/flashcard";
import type { FlashcardFilters } from "../../types/cardFilter";

export const demoCardRepo = {
  getCards(filters: FlashcardFilters = {}) {
    let cards = useCardStore.getState().cards;

    if (filters.projectId) {
      cards = cards.filter((card) => card.projectId === filters.projectId);
    }

    if (filters.mistakeOnly) {
      cards = cards.filter((card) => card.mistake);
    }

    if (filters.random) {
      cards = [...cards].sort(() => Math.random() - 0.5);
    }

    return cards;
  },

  useCards(filters: FlashcardFilters = {}) {
    let cards = useCardStore((state) => state.cards);

    if (filters.projectId) {
      cards = cards.filter((card) => card.projectId === filters.projectId);
    }

    if (filters.mistakeOnly) {
      cards = cards.filter((card) => card.mistake);
    }

    if (filters.random) {
      cards = [...cards].sort(() => Math.random() - 0.5);
    }

    return cards;
  },

  getById(id: string) {
    return useCardStore.getState().cards.find((card) => card.id === id);
  },

  create(card: FlashCard) {
    useCardStore.getState().addCard(card);

    return card;
  },

  update(id: string, changes: Partial<FlashCard>) {
    useCardStore.getState().updateCard(id, changes);
  },

  delete(id: string) {
    useCardStore.getState().deleteCard(id);
  },
};
