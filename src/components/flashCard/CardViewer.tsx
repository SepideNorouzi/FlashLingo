import { useEffect, useState } from "react";
import type { FlashCard } from "../../types/flashcard";
import CardFront from "./CardFront";
import CardBack from "./CardBack";
import styles from "../../styles/CardViewer.module.css";

interface CardViewerProps {
  card: FlashCard;
  projectName: string;
  onCorrect: () => void;
  onWrong: () => void;
}

function CardViewer({
  card,
  onCorrect,
  projectName,
  onWrong,
}: CardViewerProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    setIsFlipped(false);
  }, [card.id]);

  return (
    <div className="flex flex-col items-center gap-8 w-full max-w-[560px] mx-auto">
      {/* Scene → Card → Front + Back all always in DOM */}
      <div className={styles.scene} onClick={() => setIsFlipped(!isFlipped)}>
        <div className={`${styles.card} ${isFlipped ? styles.flipped : ""}`}>
          {/* Front face */}
          <div className={styles.face}>
            <CardFront card={card} projectName={projectName} />
          </div>

          {/* Back face — pre-rotated 180deg in CSS, waiting */}
          <div className={`${styles.face} ${styles.back}`}>
            <CardBack card={card} />
          </div>
        </div>
      </div>

      {/* Buttons sync with flip via the same isFlipped state */}
      <div className={`${styles.buttons} ${isFlipped ? styles.visible : ""}`}>
        <div className="flex items-center gap-4">
          <button
            className={styles.wrongBtn}
            onClick={(e) => {
              e.stopPropagation();
              onWrong();
            }}
          >
            <span>❌</span>
            <span>I was wrong</span>
          </button>
          <button
            className={styles.rightBtn}
            onClick={(e) => {
              e.stopPropagation();
              onCorrect();
            }}
          >
            <span>✅</span>
            <span>I was right</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardViewer;
