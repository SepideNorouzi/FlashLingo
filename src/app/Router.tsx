import { Route, Routes } from "react-router";
import Intro from "../pages/Intro";
import Dashboard from "../pages/Dashboard";
import MainLayout from "../layout/MainLayout";
import Flashcard from "../pages/FlashCard";
import StudyLayout from "../layout/StudyLayout";

function Router() {
  return (
    <div>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        <Route element={<StudyLayout />}>
          <Route path="/flashcards" element={<Flashcard />} />
        </Route>

        <Route path="/" element={<Intro />} />
      </Routes>
    </div>
  );
}

export default Router;
