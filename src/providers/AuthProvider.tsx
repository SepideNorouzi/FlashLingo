import { useEffect } from "react";
import { supabase } from "../lib/supabase";
import { useAuthStore } from "../store/authStore";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { setUser, setSession, clear, setInitialized } = useAuthStore();

  useEffect(() => {
    async function initialize() {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session) {
        setUser(session.user);
        setSession(session);
      } else {
        clear();
      }

      setInitialized(true);
    }

    initialize();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        setUser(session.user);
        setSession(session);
      } else {
        clear();
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  return children;
}
