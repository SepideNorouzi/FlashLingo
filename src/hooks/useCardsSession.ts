// hooks/useFlashcardSession.ts
import { useState, useCallback } from "react";
import { cardRepository } from "../repository/cardRepository";
import type { FlashCard } from "../types/flashcard";

export function useCardSession(cards: FlashCard[]) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentCard = cards[currentIndex] ?? null;
  const isFinished = currentIndex >= cards.length || !currentCard;

  const advance = useCallback(() => {
    if (!isFinished) {
      setCurrentIndex((i) => i + 1);
    }
  }, [isFinished]);

  const onCorrect = useCallback(() => {
    if (!currentCard) return;

    // Mark as learned, clear mistake flag
    cardRepository.update(currentCard.id, {
      learned: true,
      mistake: false,
    });

    advance();
  }, [currentCard, advance]);

  const onWrong = useCallback(() => {
    if (!currentCard) return;

    // Mark as mistake, not learned
    cardRepository.update(currentCard.id, {
      learned: false,
      mistake: true,
    });

    advance();
  }, [currentCard, advance]);

  return {
    currentCard,
    currentIndex,
    isFinished,
    onCorrect,
    onWrong,
  };
}
