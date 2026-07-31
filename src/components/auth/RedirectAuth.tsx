
import { Navigate } from "react-router";
import { useAuthStore } from "../../store/authStore";
import Loading from "../Loading";

interface RedirectIfAuthenticatedProps {
  children: React.ReactNode;
  redirectTo?: string;
}

function RedirectIfAuthenticated({
  children,
  redirectTo = "/dashboard",
}: RedirectIfAuthenticatedProps) {
  const { initialized, user } = useAuthStore();

  // Same reasoning as ProtectedRoutes: don't make a redirect decision
  // before AuthProvider has actually resolved the initial session check
  if (!initialized) {
    return <Loading />;
  }

  if (user) {
    return <Navigate to={redirectTo} replace />;
  }

  return <>{children}</>;
}

export default RedirectIfAuthenticated;
