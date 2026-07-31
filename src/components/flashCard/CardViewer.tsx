import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  animate,
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

/**
 * Outer shell: owns nothing but the AnimatePresence boundary.
 * Every time `card.id` changes, the old SwipeCard unmounts (playing its
 * exit animation) and a brand new SwipeCard mounts (fresh state: not
 * flipped, x = 0, no drag history). This is what guarantees every card
 * starts clean — no manual "reset" useEffect needed anymore.
 */
function CardViewer({
  card,
  projectName,
  onCorrect,
  onWrong,
}: CardViewerProps) {
  // Tells the exiting card which direction to fly off in.
  const [exitDirection, setExitDirection] = useState<"left" | "right" | null>(
    null,
  );

  return (
    <div className="relative mx-auto w-full max-w-[420px] md:max-w-[560px] h-[350px] md:h-[420px]">
      <AnimatePresence initial={false} custom={exitDirection} mode="popLayout">
        <SwipeCard
          key={card.id}
          card={card}
          projectName={projectName}
          onSwipeRight={() => {
            // 1. Lock in the exit direction for the animation.
            setExitDirection("right");
            // 2. Advance the SESSION immediately — do not wait on
            //    any animation.data state and
            //    visual state are now fully independent.
            onCorrect();
          }}
          onSwipeLeft={() => {
            setExitDirection("left");
            onWrong();
          }}
        />
      </AnimatePresence>
    </div>
  );
}

interface SwipeCardProps {
  card: FlashCard;
  projectName: string;
  onSwipeRight: () => void;
  onSwipeLeft: () => void;
}


function SwipeCard({
  card,
  projectName,
  onSwipeRight,
  onSwipeLeft,
}: SwipeCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const x = useMotionValue(0);
  const rotate = useTransform(x, [-250, 0, 250], [-14, 0, 14]);
  const rightOpacity = useTransform(x, [0, 150], [0, 1]);
  const leftOpacity = useTransform(x, [-150, 0], [1, 0]);

  const hasDragged = useRef(false);
  // Guards against double-firing onSwipeRight/Left if dragEnd somehow
  // fires more than once before the component unmounts.
  const resolved = useRef(false);

  function handleFlip() {
    if (hasDragged.current) {
      hasDragged.current = false;
      return;
    }
    setIsFlipped((prev) => !prev);
  }

  function handleDragEnd(
    _: MouseEvent | TouchEvent | PointerEvent,
    info: { offset: { x: number } },
  ) {
    if (!isFlipped || resolved.current) return;

    const offset = info.offset.x;

    if (offset > SWIPE_THRESHOLD) {
      resolved.current = true;
      onSwipeRight();
      return;
    }

    if (offset < -SWIPE_THRESHOLD) {
      resolved.current = true;
      onSwipeLeft();
      return;
    }

    animate(x, 0, { type: "spring", stiffness: 350, damping: 28 });
  }

  return (
    <motion.div
      className={`${styles.scene} absolute inset-0`}
      style={{ x, rotate }}
      drag={isFlipped ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.2}
      onDragStart={() => {
        hasDragged.current = true;
      }}
      onDragEnd={handleDragEnd}
      onClick={handleFlip}
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{
        x: exitVariants.x,
        rotate: exitVariants.rotate,
        opacity: 0,
        transition: { duration: 0.28 },
      }}
      transition={{ type: "spring", stiffness: 300, damping: 26 }}
    >
      <motion.div
        className={styles.correctOverlay}
        style={{ opacity: rightOpacity }}
      />
      <motion.div
        className={styles.wrongOverlay}
        style={{ opacity: leftOpacity }}
      />

      <div className={`${styles.card} ${isFlipped ? styles.flipped : ""}`}>
        <div className={styles.face}>
          <CardFront card={card} projectName={projectName} />
        </div>
        <div className={`${styles.face} ${styles.back}`}>
          <CardBack card={card} />
        </div>
      </div>
    </motion.div>
  );
}

const exitVariants = { x: 0, rotate: 0 };

export default CardViewer;
