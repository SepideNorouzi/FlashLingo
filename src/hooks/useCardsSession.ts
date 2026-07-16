// hooks/useFlashcardSession.ts
import { useState, useCallback } from "react";
import { cardRepository } from "../repository/cardRepository";
import type { FlashCard } from "../types/flashcard";

export function useCardSession(cards: FlashCard[]) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);

  const currentCard = cards[currentIndex] ?? null;
  const isFinished = currentIndex >= cards.length || !currentCard;
  const updateCard = cardRepository.useUpdateCard();

  const advance = useCallback(() => {
    if (!isFinished) {
      setCurrentIndex((i) => i + 1);
    }
  }, [isFinished]);

  const onCorrect = useCallback(async () => {
    if (!currentCard) return;

    try {
      await updateCard.mutateAsync({
        id: currentCard.id,
        changes: {
          learned: true,
          mistake: false,
        },
      });

      setCorrectCount((c) => c + 1);
      advance();
    } catch (error) {
      console.error("Failed to update card:", error);
    }
  }, [currentCard, advance, updateCard]);

  const onWrong = useCallback(async () => {
    if (!currentCard) return;

    try {
      await updateCard.mutateAsync({
        id: currentCard.id,
        changes: {
          learned: false,
          mistake: true,
        },
      });

      setWrongCount((c) => c + 1);
      advance();
    } catch (error) {
      console.error("Failed to update card:", error);
    }
  }, [currentCard, advance, updateCard]);

  return {
    currentCard,
    currentIndex,
    isFinished,
    correctCount,
    wrongCount,
    onCorrect,
    onWrong,
  };
}
