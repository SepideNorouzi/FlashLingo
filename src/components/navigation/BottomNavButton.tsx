import type { ReactNode } from "react";

interface BottomNavButtonProps {
  icon: ReactNode;
  active?: boolean;
  onClick?: () => void;
}

function BottomNavButton({
  icon,
  active = false,
  onClick,
}: BottomNavButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-2xl
        transition-all
        duration-300
        active:scale-95
        ${active ? "shadow-lg" : ""}
      `}
      style={{
        background: active ? "var(--button-gradient)" : "var(--surface)",
        color: active ? "white" : "var(--primary)",
      }}
    >
      <span className="text-2xl">{icon}</span>
    </button>
  );
}

export default BottomNavButton;
