import { Outlet } from "react-router";
import BottomNavbar from "../components/navigation/BottomNavbar";
import Sidebar from "../components/navigation/Sidebar";

function MainLayout() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Desktop */}

      <div className="mx-auto flex max-w-7xl items-stretch">
        {/* Content */}

        <main className="flex-1">
          <div className="mx-auto w-full max-w-[430px] md:max-w-5xl p-5 pb-24 md:pb-5">
            <Outlet />
          </div>
        </main>

        {/* Sidebar */}

        <Sidebar />
      </div>

      {/* Mobile */}

      <div className="md:hidden">
        <BottomNavbar />
      </div>
    </div>
  );
}

export default MainLayout;
