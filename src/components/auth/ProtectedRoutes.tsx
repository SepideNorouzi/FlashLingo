import { Navigate, Outlet } from "react-router";
import { useAuthStore } from "../../store/authStore";

function ProtectedRoutes() {
  const { initialized, user } = useAuthStore();

  if (!initialized) {
    return <p>loading...</p>;
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoutes;
