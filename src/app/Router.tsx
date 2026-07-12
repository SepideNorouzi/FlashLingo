import { Route, Routes } from "react-router";
import Dashboard from "../pages/Dashboard";
import MainLayout from "../layout/MainLayout";
import Flashcard from "../pages/FlashCard";
import StudyLayout from "../layout/StudyLayout";

function Router() {
  return (
    <div>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
        </Route>

        <Route element={<StudyLayout />}>
          <Route path="/flashcards" element={<Flashcard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default Router;
