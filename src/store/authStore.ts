import { create } from "zustand";
import type { Session, User } from "@supabase/supabase-js";

interface AuthStore {
  user: User | null;
  session: Session | null;

  loading: boolean;
  initialized: boolean;

  setUser: (user: User | null) => void;
  setSession: (session: Session | null) => void;

  setLoading: (loading: boolean) => void;
  setInitialized: (initialized: boolean) => void;

  clear: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  session: null,

  loading: false,
  initialized: false,

  setUser: (user) => set({ user }),

  setSession: (session) => set({ session }),

  setLoading: (loading) => set({ loading }),

  setInitialized: (initialized) => set({ initialized }),

  clear: () =>
    set({
      user: null,
      session: null,
    }),
}));
