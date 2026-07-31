// authService → talks to Supabase
// authStore → stores the user
// useAuth → glues the two together

import { useNavigate } from "react-router";

import { authService } from "../services/auth";
import { useAuthStore } from "../store/authStore";
import { useModeStore } from "../store/modeStore";

export function useAuth() {
  const navigate = useNavigate();

  const { user, session, loading, setUser, setSession, setLoading, clear } =
    useAuthStore();
  const { setMode } = useModeStore();

  async function login(email: string, password: string) {
    setLoading(true);
    try {
      const { session, user } = await authService.signIn(email, password);

      if (!session || !user) {
        throw new Error(
          "Sign in failed. Confirm your email in Supabase Auth, or disable email confirmation for local testing.",
        );
      }

      setUser(user);
      setSession(session);
      setMode("admin");
      navigate("/dashboard");
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  }

  async function signup(username: string, email: string, password: string) {
    setLoading(true);

    try {
      const { session, user } = await authService.signUp(
        username,
        email,
        password,
      );

      // Email confirmation enabled → no session yet
      if (!session || !user) {
        throw new Error(
          "Account created. Check your email to confirm, then sign in. Or disable Confirm email in Supabase Auth settings for local testing.",
        );
      }

      setUser(user);
      setSession(session);
      setMode("admin");
      navigate("/dashboard");
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  }

  async function logout() {
    setLoading(true);

    try {
      await authService.signOut();

      clear();
      setMode("demo");
      navigate("/auth");
    } finally {
      setLoading(false);
    }
  }

  return {
    user,
    session,
    loading,

    isAuthenticated: !!user,

    login,
    signup,
    logout,
  };
}
