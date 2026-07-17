import { useEffect, useRef, useState } from "react";
import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";

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

const SWIPE_THRESHOLD = 140;

function CardViewer({
  card,
  projectName,
  onCorrect,
  onWrong,
}: CardViewerProps) {
  /**
   * Keeps track of whether the card has been flipped.
   */
  const [isFlipped, setIsFlipped] = useState(false);

  /**
   * Prevents multiple swipes while the exit animation is playing.
   */
  const [isAnimating, setIsAnimating] = useState(false);

  const x = useMotionValue(0);

  const rotate = useTransform(x, [-250, 0, 250], [-14, 0, 14]);

  /**
   * Controls the fly-away animation.
   */
  const controls = useAnimation();

  /**
   * Drag right => green check fades in.
   * Drag left => red cross fades in.
   */
  const rightOpacity = useTransform(x, [0, 150], [0, 1]);

  const leftOpacity = useTransform(x, [-150, 0], [1, 0]);

  /**
   * Used to ignore clicks after dragging.
   */
  const hasDragged = useRef(false);

  /**
   * Every time a new flashcard arrives,
   * reset everything.
   */
  useEffect(() => {
    setIsFlipped(false);
    setIsAnimating(false);

    x.set(0);

    controls.set({
      x: 0,
      rotate: 0,
      opacity: 1,
    });
  }, [card.id]);

  /**
   * Flip card.
   *
   * If the user was dragging,
   * don't treat it as a tap.
   */
  function handleFlip() {
    if (hasDragged.current) {
      hasDragged.current = false;
      return;
    }

    setIsFlipped((prev) => !prev);
  }

  /**
   * Runs after the user releases the drag.
   */
  async function handleDragEnd(
    _: MouseEvent | TouchEvent | PointerEvent,
    info: {
      offset: {
        x: number;
      };
    },
  ) {
    if (!isFlipped || isAnimating) return;

    const offset = info.offset.x;

    /**
     * RIGHT
     */
    if (offset > SWIPE_THRESHOLD) {
      setIsAnimating(true);

      await controls.start({
        x: 600,
        rotate: 25,
        opacity: 0,
        transition: {
          duration: 0.28,
        },
      });

      onCorrect();

      return;
    }

    /**
     * LEFT
     */
    if (offset < -SWIPE_THRESHOLD) {
      setIsAnimating(true);

      await controls.start({
        x: -600,
        rotate: -25,
        opacity: 0,
        transition: {
          duration: 0.28,
        },
      });

      onWrong();

      return;
    }

    /**
     * Not enough distance.
     *
     * Snap back.
     */
    controls.start({
      x: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 350,
        damping: 28,
      },
    });
  }

  return (
    <div className="flex w-full max-w-[560px] flex-col items-center gap-8 mx-auto">
      <motion.div
        className={styles.scene}
        animate={controls}
        style={{
          x,
          rotate,
        }}
        drag={isFlipped ? "x" : false}
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        dragElastic={0.2}
        onDragStart={() => {
          hasDragged.current = true;
        }}
        onDragEnd={handleDragEnd}
        onClick={handleFlip}
      >
        <motion.div
          className={styles.correctOverlay}
          style={{
            opacity: rightOpacity,
          }}
        >
          ✅
        </motion.div>

        <motion.div
          className={styles.wrongOverlay}
          style={{
            opacity: leftOpacity,
          }}
        >
          ❌
        </motion.div>

        <div className={`${styles.card} ${isFlipped ? styles.flipped : ""}`}>
          <div className={styles.face}>
            <CardFront card={card} projectName={projectName} />
          </div>

          <div className={`${styles.face} ${styles.back}`}>
            <CardBack card={card} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default CardViewer;
