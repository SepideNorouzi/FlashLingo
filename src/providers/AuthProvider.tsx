import { useEffect } from "react";
import { supabase } from "../lib/supabase";
import { useAuthStore } from "../store/authStore";
import { useModeStore } from "../store/modeStore";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { setUser, setSession, clear, setInitialized } = useAuthStore();
  const { setMode } = useModeStore();

  useEffect(() => {
    // Check if Supabase already has a session in localStorage
    async function initialize() {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session) {
        setUser(session.user);
        setSession(session);
        setMode("admin"); //restore the correct mode
      } else {
        clear();
        setMode("demo");
      }

      setInitialized(true); //now the app knows auth check is done
    }

    initialize();
    // Subscribe to future auth changes (login, logout, token refresh)
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        setUser(session.user);
        setSession(session);
        setMode("admin");
      } else {
        clear();
        setMode("demo");
      }
    });
    // Cleanup the listener when the component unmounts
    return () => subscription.unsubscribe();
  }, []);

  return children;
}
