import { Navigate, Outlet } from "react-router";
import { useAuthStore } from "../../store/authStore";
import Loading from "../Loading";

function ProtectedRoutes() {
  const { initialized, user } = useAuthStore();

  if (!initialized) {
    return <Loading />;
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoutes;
