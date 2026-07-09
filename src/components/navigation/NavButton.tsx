import { type ReactNode } from "react";

interface NavButtonProps {
  icon: ReactNode;
  label: string;
  onClick?: () => void;
}

function NavButton({ icon, label, onClick }: NavButtonProps) {
  return (
    <button
      onClick={onClick}
      className="
group
flex
w-full
items-center
gap-4
rounded-2xl
px-5
py-4
transition-all
duration-300
hover:-translate-y-1
hover:shadow-lg
"
      style={{
        background:
          "linear-gradient(135deg,var(--surface),var(--surface-soft))",
        border: "1px solid var(--border)",
      }}
    >
      <span
        className="
text-xl
transition-transform
duration-300
group-hover:scale-110
"
        style={{
          color: "var(--primary)",
        }}
      >
        {icon}
      </span>
      <span>{label}</span>
    </button>
  );
}

export default NavButton;
