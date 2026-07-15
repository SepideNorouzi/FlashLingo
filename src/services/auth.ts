import { supabase } from "../lib/supabase";

export const authService = {
  async signUp(email: string, password: string, username: string) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) throw error;

    if (data.user) {
      const { error: profileError } = await supabase.from("profiles").insert({
        id: data.user.id,
        username,
      });

      if (profileError) throw profileError;
    }

    return data;
  },

  async signIn(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    return data;
  },

  async signOut() {
    const { error } = await supabase.auth.signOut();

    if (error) throw error;
  },

  async getUser() {
    const { data, error } = await supabase.auth.getUser();

    if (error) throw error;

    return data.user;
  },

  async getSession() {
    const { data, error } = await supabase.auth.getSession();

    if (error) throw error;

    return data.session;
  },
};
