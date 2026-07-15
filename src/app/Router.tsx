import { Route, Routes } from "react-router";
import Dashboard from "../pages/Dashboard";
import MainLayout from "../layout/MainLayout";
import Flashcard from "../pages/FlashCard";
import StudyLayout from "../layout/StudyLayout";
import Intro from "../pages/Intro";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/intro" element={<Intro />} />
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
