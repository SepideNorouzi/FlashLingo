import { Layers, Plus } from "lucide-react";

type NoFlashcardsProps = {
  onCreateCard?: () => void;
};

function NoFlashcards({ onCreateCard }: NoFlashcardsProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-24 px-6">
      {/* Icon badge — same visual language as the sidebar logo:
          gradient fill + soft glow shadow, not a flat gray circle.
          This makes the empty state feel "on-brand" instead of
          like a generic placeholder screen. */}
      <div
        className="
          relative
          rounded-2xl
          p-5
          mb-6
          transition-all
          duration-300
        "
        style={{
          background: "var(--button-gradient)",
          boxShadow:
            "0 0 28px rgba(124,58,237,.28), 0 0 55px rgba(225,29,120,.18)",
        }}
      >
        <Layers size={32} color="white" strokeWidth={2.2} />
      </div>

      {/* Eyebrow label — mirrors the "Menu" label style in Sidebar:
          uppercase, tracking-widest, --text-light. Small detail, but
          repeating this pattern across the app is what makes it feel
          designed rather than assembled piece by piece. */}
      <p
        className="mb-2 text-xs font-semibold uppercase tracking-widest"
        style={{ color: "var(--text-light)" }}
      >
        Your Deck
      </p>

      <h2 className="text-xl font-bold" style={{ color: "var(--text)" }}>
        No flashcards here yet
      </h2>

      <p
        className="text-sm mt-2 max-w-xs leading-relaxed"
        style={{ color: "var(--text-light)" }}
      >
        Your deck is empty right now. Add your first card and start learning
        one word at a time.
      </p>

      {onCreateCard && (
        <button
          onClick={onCreateCard}
          className="
            mt-8
            inline-flex
            items-center
            gap-2
            rounded-xl
            px-6
            py-3
            font-semibold
            text-white
            transition
            duration-200
            hover:-translate-y-0.5
            hover:shadow-lg
          "
          style={{
            background: "var(--button-gradient)",
            boxShadow: "0 8px 20px var(--shadow)",
          }}
        >
          <Plus size={18} strokeWidth={2.5} />
          Add your first card
        </button>
      )}
    </div>
  );
}

export default NoFlashcards;