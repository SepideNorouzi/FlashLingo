import { Route, Routes } from "react-router";
import Intro from "../pages/Intro";
import Dashboard from "../pages/Dashboard";
import MainLayout from "../layout/MainLayout";
import Flashcard from "../pages/FlashCard";

function Router() {
  return (
    <div>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Intro />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/flashcards" element={<Flashcard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default Router;
