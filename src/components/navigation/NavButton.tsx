import { type ReactNode } from "react";

interface NavButtonProps {
  icon: ReactNode;
  label: string;
  onClick?: () => void;
}

function NavButton({ icon, label, onClick }: NavButtonProps) {
  const classes = `
    flex items-center gap-4
    rounded-2xl
    px-4 py-3
    text-gray-700
    transition-all duration-200
  `;

  return (
    <button
      onClick={onClick}
      className={`${classes} hover:bg-white hover:shadow-sm w-full`}
    >
      <span className="text-2xl">{icon}</span>
      <span>{label}</span>
    </button>
  );
}

export default NavButton;
