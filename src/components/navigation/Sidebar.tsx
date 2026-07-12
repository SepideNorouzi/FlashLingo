import { BookOpen, Plus, Search, Settings } from "lucide-react";
import NavButton from "./NavButton";
import type { ModalType } from "../../store/uiStore";
import SidebarModeCard from "./SidebarModeCard";

interface SidebarProps {
  onOpenModal: (modal: ModalType) => void;
}

function Sidebar({ onOpenModal }: SidebarProps) {
  const menuItems = [
    {
      label: "Add Flashcard",
      icon: <Plus size={22} />,
      action: () => onOpenModal("add-card"),
    },
    {
      label: "Search",
      icon: <Search size={22} />,
      action: () => onOpenModal("search"),
    },
    {
      label: "Settings",
      icon: <Settings size={22} />,
      action: () => onOpenModal("settings"),
    },
  ];

  return (
<aside
  className="
    hidden
    md:flex
    h-full
    w-72
    flex-col
    justify-between
    border-l
    p-8
  "
  style={{
    background: "linear-gradient(180deg,var(--surface),var(--surface-soft))",
    borderColor: "var(--border)",
  }}
>
      {/* Top */}
      <div>
        {/* Logo */}
        <div className="mb-12">
          <div className="flex items-center gap-3">
            <div
              className="rounded-2xl p-3"
              style={{
                background: "var(--secondary-light)",
              }}
            >
              <BookOpen size={26} style={{ color: "var(--secondary)" }} />
            </div>

            <div>
              <h1
                className="text-2xl font-bold"
                style={{ color: "var(--text)" }}
              >
                FlashLingo
              </h1>

              <p className="text-sm" style={{ color: "var(--text-light)" }}>
                One card at a time
              </p>
            </div>
          </div>
        </div>

        <p
          className="mb-3 text-xs font-semibold uppercase tracking-widest"
          style={{
            color: "var(--text-light)",
          }}
        >
          Menu
        </p>

        {/* Navigation */}

        <nav className="space-y-3">
          {menuItems.map((item) => (
            <NavButton
              key={item.label}
              icon={item.icon}
              label={item.label}
              onClick={item.action}
            />
          ))}
        </nav>
      </div>

      {/* Footer */}

      <SidebarModeCard />
    </aside>
  );
}

export default Sidebar;
