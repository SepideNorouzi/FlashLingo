import { type FlashCard } from "../types/flashcard";

export const mockFlashcards: FlashCard[] = [
  {
    id: "1",
    word: "ciao",
    pronunciation: "chow",
    meaning: "hello",
    projectId: "espresso-1",
    learned: false,
    mistake: true,
    createdAt: "2026-07-01",
  },
  {
    id: "2",
    word: "grazie",
    pronunciation: "graht-see-eh",
    meaning: "thank you",
    projectId: "espresso-1",
    learned: true,
    mistake: false,
    createdAt: "2026-07-01",
  },
];
