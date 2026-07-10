import type { FlashCard } from "../../types/flashcard";
import CardShell from "./CardShell";

interface CardFrontProps {
  card: FlashCard;
  projectName: string;
}

function CardFront({ card, projectName }: CardFrontProps) {
  const badge = card.mistake
    ? "⚠ Review"
    : card.learned
      ? "⭐ Learned"
      : "🌱 New";

  return (
    <CardShell>
      <span className="absolute right-8 top-[38%] text-2xl opacity-40">✨</span>
      <span className="absolute left-8 top-[52%] text-xl opacity-35">🌸</span>

      {/* Top */}
      <div className="relative z-10 flex w-full justify-center">
        <p
          className="text-sm font-semibold"
          style={{ color: "var(--primary)" }}
        >
          {projectName}
        </p>
      </div>

      {/* Middle */}
      <div className="relative z-10 text-center">
        <h1
          className="text-5xl font-bold tracking-tight md:text-6xl"
          style={{ color: "var(--text)" }}
        >
          {card.word}
        </h1>
        <p
          className="mt-4 text-lg italic md:text-xl"
          style={{ color: "var(--text-light)" }}
        >
          /{card.pronunciation}/
        </p>
      </div>

      {/* Bottom */}
      <div className="relative z-10 flex flex-col items-center gap-4">
        <div
          className="rounded-full px-6 py-3"
          style={{
            background: "rgba(255,255,255,.8)",
            backdropFilter: "blur(10px)",
          }}
        >
          <p className="text-sm" style={{ color: "var(--text-light)" }}>
            Tap anywhere to reveal the answer
          </p>
        </div>
        <div
          className="rounded-full px-4 py-2 text-xs font-semibold"
          style={{
            background: "rgba(255,255,255,.8)",
            color: "var(--primary)",
          }}
        >
          {badge}
        </div>
      </div>
    </CardShell>
  );
}

export default CardFront;
