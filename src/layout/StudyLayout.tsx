import { Outlet } from "react-router";

function StudyLayout() {
  return (
    <main className="min-h-screen" style={{ background: "var(--bg)" }}>
      <div className="mx-auto max-w-6xl p-6">
        <Outlet />
      </div>
    </main>
  );
}

export default StudyLayout;
