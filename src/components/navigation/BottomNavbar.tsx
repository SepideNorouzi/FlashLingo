import { Search, Plus, Settings } from "lucide-react";
import type { ModalType } from "../../store/uiStore";
import BottomNavButton from "./BottomNavButton";

interface BottomNavbarProps {
  onOpenModal: (modal: ModalType) => void;
}

function BottomNavbar({ onOpenModal }: BottomNavbarProps) {
  return (
    <nav
      className="
        fixed
        bottom-5
        left-1/2
        z-50
        flex
        w-[260px]
        -translate-x-1/2
        items-center
        justify-between
        rounded-full
        px-5
        py-2
        shadow-xl
      "
      style={{
        background: "rgba(255,255,255,.78)",
        backdropFilter: "blur(18px)",
        border: "1px solid var(--border)",
      }}
    >
      <BottomNavButton
        icon={<Search size={20} />}
        onClick={() => onOpenModal("search")}
      />

      <button
        type="button"
        onClick={() => onOpenModal("add-card")}
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          shadow-lg
          transition-all
          duration-300
          hover:-translate-y-0.5
          active:scale-95
        "
        style={{
          background: "var(--button-gradient)",
          color: "white",
        }}
      >
        <Plus size={22} strokeWidth={2.5} />
      </button>

      <BottomNavButton
        icon={<Settings size={20} />}
        onClick={() => onOpenModal("settings")}
      />
    </nav>
  );
}

export default BottomNavbar;
