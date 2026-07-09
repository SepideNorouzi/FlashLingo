import { NavLink } from "react-router";
import { type ReactNode } from "react";

interface NavButtonProps {
  to: string;
  icon: ReactNode;
  label: string;
}

function NavButton({ to, icon, label }: NavButtonProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `
        flex items-center gap-4
        rounded-2xl
        px-4 py-3
        text-gray-700
        transition-all duration-200

        ${
          isActive
            ? "bg-white shadow-sm border-l-4 border-amber-400 font-semibold text-amber-600"
            : "hover:bg-white hover:shadow-sm"
        }
      `
      }
    >
      <span className="text-2xl">{icon}</span>

      <span className="text-base">{label}</span>
    </NavLink>
  );
}

export default NavButton;
