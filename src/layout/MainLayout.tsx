import { Outlet } from "react-router";
import Navbar from "../components/navigation/Navbar";

function MainLayout() {
  return (
    <div
      className="flex min-h-screen"
      style={{ background: "var(--bg)" }}
    >
      {/* Sidebar — lives outside the scroll context so sticky works */}
      <Navbar />

      {/* Main content — this is the only thing that scrolls */}
      <main className="flex-1 overflow-x-hidden">
        <div className="mx-auto w-full max-w-[430px] p-5 pb-24 md:max-w-5xl md:pb-5">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default MainLayout;