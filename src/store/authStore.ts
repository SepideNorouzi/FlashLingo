import { create } from "zustand";
import type { Session, User } from "@supabase/supabase-js";

interface AuthState {
  user: User | null;
  session: Session | null;
  loading: boolean;
  setUser: (user: User | null) => void;
  setSession: (session: Session | null) => void;
  setLoading: (loading: boolean) => void;
  clear: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  session: null,
  loading: true,
  setUser: (user) =>
    set({
      user,
    }),
  setSession: (session) =>
    set({
      session,
    }),
  setLoading: (loading) =>
    set({
      loading,
    }),
  clear: () =>
    set({
      user: null,
      session: null,
      loading: false,
    }),
}));
