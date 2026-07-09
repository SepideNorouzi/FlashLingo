import { BookOpen, Plus, Search, Settings } from "lucide-react";
import NavButton from "./NavButton";

function Sidebar() {
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
            <div className="rounded-2xl bg-amber-100 p-3">
              <BookOpen className="text-amber-600" size={28} />
            </div>

            <div>
              <h1 className="text-xl font-bold">FlashLingo</h1>

              <p className="text-sm text-gray-500">Learn one card at a time</p>
            </div>
          </div>
        </div>

        {/* Navigation */}

        <nav className="space-y-3">
          <NavButton
            to="/add"
            icon={<Plus size={22} />}
            label="Add Flashcard"
          />

          <NavButton to="/search" icon={<Search size={22} />} label="Search" />

          <NavButton
            to="/settings"
            icon={<Settings size={22} />}
            label="Settings"
          />
        </nav>
      </div>

      {/* Footer */}

      <div className="rounded-2xl bg-white p-4 shadow-sm">
        <p className="font-semibold text-amber-600">Demo Mode</p>
      </div>
    </aside>
  );
}

export default Sidebar;
