import { BookOpen, Plus, Search, Settings } from "lucide-react";
import NavButton from "./NavButton";
import type { ModalType } from "../../store/uiStore";

interface SidebarProps {
  onOpenModal: (modal: ModalType) => void;
}

function Sidebar({ onOpenModal }: SidebarProps) {
  const mode: "demo" | "admin" = "demo";
  // later :
  // const mode = useAppStore((state) => state.mode);

  return (
    <aside
      className="
    hidden
    md:sticky
    md:top-0
    md:flex
    md:h-screen
    w-72
    flex-col
    justify-between
    border-l
    p-8
  "
      style={{
        background:
          "linear-gradient(180deg,var(--surface),var(--surface-soft))",
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

      {/* Footer */}
      <div
        className="flex flex-col items-center rounded-3xl p-5 text-center"
        style={{
          background:
            "linear-gradient(135deg,var(--primary-light),var(--secondary-light))",
        }}
      >
        {mode === "demo" ? (
          <>
            <p className="font-semibold" style={{ color: "var(--primary)" }}>
              🌸 Demo Mode
            </p>

            <span
              className="mt-2 text-sm leading-relaxed"
              style={{ color: "var(--text-light)" }}
            >
              All your data stays on this device.
            </span>
          </>
        ) : (
          <>
            <p className="font-semibold" style={{ color: "var(--primary)" }}>
              👤 Admin Mode
            </p>

            <span
              className="mt-2 text-sm leading-relaxed"
              style={{ color: "var(--text-light)" }}
            >
              Changes are synced with your account.
            </span>
          </>
        )}
      </div>
    </aside>
  );
}

export default Sidebar;
