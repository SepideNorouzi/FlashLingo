import { type FlashcardFilters } from "../types/cardFilter";
import { flashcardService } from "../services/FlashCard";

export function useFlashcards(filters: FlashcardFilters = {}) {
  return flashcardService.getCards(filters);
}
