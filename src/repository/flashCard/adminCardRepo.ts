import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import { flashcardService } from "../../services/FlashCard";

import type { FlashCard } from "../../types/flashcard";
import type { FlashcardFilters } from "../../types/cardFilter";
import { useModeStore } from "../../store/modeStore";

const FLASHCARDS_KEY = ["flashcards"];

export const adminCardRepo = {
  async getCards(filters: FlashcardFilters = {}) {
    return await flashcardService.getCards(filters);
  },

  useCards(filters: FlashcardFilters = {}) {
    const mode = useModeStore((s) => s.mode);
    const { data = [] } = useQuery({
      queryKey: [...FLASHCARDS_KEY, filters],
      queryFn: () => flashcardService.getCards(filters),
      enabled: mode === "admin", // don't fetch while in demo mode
      staleTime: 0,
    });
    return data;
  },

  async getById(id: string) {
    return await flashcardService.getById(id);
  },

  useCreateCard() {
    const queryClient = useQueryClient();

    return useMutation({
      mutationFn: flashcardService.create,

      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: FLASHCARDS_KEY,
        });
      },
    });
  },

  useUpdateCard() {
    const queryClient = useQueryClient();

    return useMutation({
      mutationFn: ({
        id,
        changes,
      }: {
        id: string;
        changes: Partial<FlashCard>;
      }) => flashcardService.update(id, changes),

      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: FLASHCARDS_KEY,
        });
      },
    });
  },

  useDeleteCard() {
    const queryClient = useQueryClient();

    return useMutation({
      mutationFn: flashcardService.delete,

      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: FLASHCARDS_KEY,
        });
      },
    });
  },
};
