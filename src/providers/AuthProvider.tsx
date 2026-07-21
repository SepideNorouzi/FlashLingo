import { useEffect } from "react";
import { hasSupabase, supabase } from "../lib/supabase";
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
    if (!hasSupabase) {
      clear();
      setMode("demo");
      setInitialized(true);
      return;
    }

    async function initialize() {
      const {
        data: { session },
      } = await supabase!.auth.getSession();

      if (session) {
        setUser(session.user);
        setSession(session);
        setMode("admin");
      } else {
        clear();
        setMode("demo");
      }

      setInitialized(true);
    }

    initialize();

    const {
      data: { subscription },
    } = supabase!.auth.onAuthStateChange((_event, session) => {
      if (session) {
        setUser(session.user);
        setSession(session);
        setMode("admin");
      } else {
        clear();
        setMode("demo");
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  return children;
}
