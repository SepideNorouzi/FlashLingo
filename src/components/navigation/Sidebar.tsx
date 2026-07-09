import { BookOpen, Plus, Search, Settings } from "lucide-react";
import NavButton from "./NavButton";
import type { ModalType } from "../../store/uiStore";

interface SidebarProps {
  onOpenModal: (modal: ModalType) => void;
}

function Sidebar({ onOpenModal }: SidebarProps) {
  return (
    <aside
      className="
    hidden
    md:sticky
    md:top-0
    md:flex
    md:h-screen
    w-64
    flex-col
    justify-between
    bg-[#FFF8F1]
    p-6
  "
    >
      {/* Top */}
      <div>
        {/* Logo */}
        <div className="mb-12">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-pink-100 p-3">
              <BookOpen className="text-pink-600" size={28} />
            </div>

            <div>
              <h1 className="text-xl font-bold">FlashLingo</h1>

              <p className="text-sm text-gray-500">One card at a time</p>
            </div>
          </div>
        </div>

        {/* Navigation */}

        <nav className="space-y-3">
          <NavButton
            icon={<Plus size={22} />}
            label="Add Flashcard"
            onClick={() => {
    console.log("clicked");
    onOpenModal("add-card");
  }}
          />

          <NavButton
            icon={<Search size={22} />}
            label="Search"
            onClick={() => onOpenModal("search")}
          />

          <NavButton
            icon={<Settings size={22} />}
            label="Settings"
            onClick={() => onOpenModal("settings")}
          />
        </nav>
      </div>

      {/* Footer */}

      <div className="rounded-2xl bg-white p-4 shadow-sm ">
        <p className="font-semibold text-pink-600 ">Demo Mode</p>
      </div>
    </aside>
  );
}

export default Sidebar;
