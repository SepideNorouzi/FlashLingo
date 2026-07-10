interface ActionButtonsProps {
  isFlipped: boolean;
  onCorrect: () => void;
  onWrong: () => void;
}

interface ButtonConfig {
  label: string;
  emoji: string;
  onClick: () => void;
  colors: {
    bg: string;
    border: string;
    text: string;
    hoverBg: string;
  };
}

function ActionButtons({ isFlipped, onCorrect, onWrong }: ActionButtonsProps) {
  const buttons: ButtonConfig[] = [
    {
      label: "I was wrong",
      emoji: "❌",
      onClick: onWrong,
      colors: {
        bg: "rgba(255, 100, 100, 0.08)",
        border: "rgba(255, 100, 100, 0.25)",
        text: "#e05555",
        hoverBg: "rgba(255, 100, 100, 0.15)",
      },
    },
    {
      label: "I was right",
      emoji: "✅",
      onClick: onCorrect,
      colors: {
        bg: "rgba(80, 200, 120, 0.08)",
        border: "rgba(80, 200, 120, 0.25)",
        text: "#3a9e60",
        hoverBg: "rgba(80, 200, 120, 0.15)",
      },
    },
  ];

  return (
    <div
      className="
        flex
        items-center
        justify-center
        gap-4
        transition-all
        duration-300
      "
      style={{
        opacity: isFlipped ? 1 : 0,
        pointerEvents: isFlipped ? "auto" : "none",
        transform: isFlipped ? "translateY(0)" : "translateY(8px)",
      }}
    >
      {buttons.map(({ label, emoji, onClick, colors }) => (
        <button
          key={label}
          onClick={onClick}
          className="
            group
            flex
            items-center
            gap-2
            rounded-full
            border
            px-6
            py-3
            text-sm
            font-semibold
            transition-all
            duration-200
            hover:scale-105
            hover:shadow-md
            active:scale-95
          "
          style={{
            background: colors.bg,
            borderColor: colors.border,
            color: colors.text,
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.background = colors.hoverBg;
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.background = colors.bg;
          }}
        >
          <span>{emoji}</span>
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
}

export default ActionButtons;