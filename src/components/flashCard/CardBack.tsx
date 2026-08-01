import type { FlashCard } from "../../types/flashcard";
import CardShell from "./CardShell";

interface CardBackProps {
  card: FlashCard;
}

function CardBack({ card }: CardBackProps) {
  return (
    <CardShell background="linear-gradient(180deg,var(--primary-light),var(--secondary-light))">
      <span className="absolute right-8 top-[45%] text-2xl opacity-40">📖</span>
      <span className="absolute left-8 top-[42%] text-xl opacity-35">🌸</span>

      <div className="relative z-10 flex w-full justify-center">
        <div
          className="rounded-full px-5 py-2 text-sm font-semibold"
          style={{
            background: "rgba(255,255,255,.85)",
            color: "var(--primary)",
          }}
        >
          Meaning
        </div>
      </div>

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
        <div
          className="mx-auto mt-8 max-w-xs rounded-3xl px-6 py-5"
          style={{
            background: "rgba(255,255,255,.72)",
            backdropFilter: "blur(14px)",
          }}
        >
          <p
            className="mb-2 text-xs uppercase tracking-[0.25em]"
            style={{ color: "var(--text-light)" }}
          >
            Translation
          </p>
          <h2
            className="text-3xl font-bold md:text-4xl"
            style={{ color: "var(--text)" }}
          >
            {card.meaning}
          </h2>
        </div>
        <div
          className="mt-8 text-center text-sm font-medium"
          style={{
            color: "var(--text-light)",
            opacity: 0.75,
          }}
        >
          ❌ Wrong &nbsp;&nbsp;•&nbsp;&nbsp; ✅ Right
        </div>
      </div>
    </CardShell>
  );
}

export default CardBack;
