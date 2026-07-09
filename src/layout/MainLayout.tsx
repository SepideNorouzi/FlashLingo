import { Outlet } from "react-router";

import Navbar from "../components/navigation/Navbar";

function MainLayout() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      <div className="mx-auto flex max-w-7xl items-stretch">
        {/* Content */}

        <main className="flex-1">
          <div className="mx-auto w-full max-w-[430px] md:max-w-5xl p-5 pb-24 md:pb-5">
            <Outlet />
          </div>
        </main>

        {/* Sidebar */}

        <Navbar />
      </div>
    </div>
  );
}

export default MainLayout;
