import type { AuthChangeEvent, Session } from "@supabase/supabase-js";
import { requireSupabase, supabase } from "../lib/supabase";

export const authService = {
  async signUp(username: string, email: string, password: string) {
    if (!supabase) {
      throw new Error("Authentication isn't available in this deployment.");
    }
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username,
        },
      },
    });

    if (error) throw error;

    return data;
  },

  async signIn(email: string, password: string) {
    const db = requireSupabase();

    const { data, error } = await db.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    return data;
  },

  async signOut() {
    const db = requireSupabase();

    const { error } = await db.auth.signOut();

    if (error) throw error;
  },

  async getSession() {
    const db = requireSupabase();

    const { data, error } = await db.auth.getSession();

    if (error) throw error;

    return data.session;
  },

  async getUser() {
    const db = requireSupabase();

    const { data, error } = await db.auth.getUser();

    if (error) throw error;

    return data.user;
  },

  onAuthStateChange(
    callback: (event: AuthChangeEvent, session: Session | null) => void,
  ) {
    if (!supabase) {
      throw new Error("Authentication isn't available in this deployment.");
    }

    return supabase.auth.onAuthStateChange(callback);
  },
};
