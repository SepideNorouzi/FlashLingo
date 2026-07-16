import { Route, Routes } from "react-router";
import Dashboard from "../pages/Dashboard";
import MainLayout from "../layout/MainLayout";
import Flashcard from "../pages/FlashCard";
import StudyLayout from "../layout/StudyLayout";
import Intro from "../pages/Intro";
import AuthPage from "../pages/AuthPage";
import ProtectedRoutes from "../components/auth/ProtectedRoutes";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route element={<MainLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>

          <Route element={<StudyLayout />}>
            <Route path="/flashcards" element={<Flashcard />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default Router;
