import { Route, Routes } from "react-router";
import Dashboard from "../pages/Dashboard";
import MainLayout from "../layout/MainLayout";
import Flashcard from "../pages/FlashCard";
import StudyLayout from "../layout/StudyLayout";
import Intro from "../pages/Intro";
import AuthPage from "../pages/AuthPage";
import ProtectedRoutes from "../components/auth/ProtectedRoutes";
import { useModeStore } from "../store/modeStore";
import Loading from "../components/Loading";
import AuthInProgress from "../pages/InProgress";
import RedirectIfAuthenticated from "../components/auth/RedirectAuth";

function Router() {
  const mode = useModeStore((state) => state.mode);
  return (
    <div>
      <Routes>
        <Route path="/auth-progress" element={<AuthInProgress />} />
        <Route path="/load" element={<Loading />} />
        <Route
          path="/"
          element={
            <RedirectIfAuthenticated>
              <Intro />
            </RedirectIfAuthenticated>
          }
        />
        <Route
          path="/auth"
          element={
            <RedirectIfAuthenticated>
              <AuthPage />
            </RedirectIfAuthenticated>
          }
        />
        {mode == "admin" ? (
          <Route element={<ProtectedRoutes />}>
            <Route element={<MainLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>

            <Route element={<StudyLayout />}>
              <Route path="/flashcards" element={<Flashcard />} />
            </Route>
          </Route>
        ) : (
          <Route>
            <Route element={<MainLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
            <Route element={<StudyLayout />}>
              <Route path="/flashcards" element={<Flashcard />} />
            </Route>{" "}
          </Route>
        )}
      </Routes>
    </div>
  );
}

export default Router;
