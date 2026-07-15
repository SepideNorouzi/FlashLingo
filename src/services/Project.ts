import { supabase } from "../lib/supabase";

export const projectService = {
  async getAll() {
    const { data, error } = await supabase.from("projects").select("*");

    if (error) {
      throw error;
    }

    return data;
  },

  async getById(id: string) {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      throw error;
    }

    return data;
  },

  async create(name: string) {
    const { data, error } = await supabase
      .from("projects")
      .insert({
        name,
      })
      .select()
      .single();

    if (error) {
      throw error;
    }

    return data;
  },

  async delete(id: string) {
    const { error } = await supabase.from("projects").delete().eq("id", id);

    if (error) {
      throw error;
    }
  },
};
