import { requireSupabase } from "../lib/supabase";
import type { Project } from "../types/project";
import type { ProjectRow } from "../types/database";

function mapProject(project: ProjectRow): Project {
  return {
    id: project.id,
    name: project.name,
    createdAt: project.created_at,
  };
}

export const projectService = {
  async getAll() {
    const db = requireSupabase();

    const { data, error } = await db
      .from("projects")
      .select("*")
      .order("created_at", { ascending: false });
    // ↑ no user_id filter — RLS ensures you only get your own rows

    if (error || !data) throw error ?? new Error("Failed to fetch projects.");

    return data.map(mapProject);
  },

  async getById(id: string) {
    const db = requireSupabase();

    const { data, error } = await db
      .from("projects")
      .select("*")
      .eq("id", id)
      // ↑ no user_id filter — RLS blocks access to others' projects
      .single();

    if (error || !data) throw error ?? new Error("Project not found.");

    return mapProject(data);
  },

  async create(name: string) {
    const db = requireSupabase();

    const {
      data: { user },
    } = await db.auth.getUser();
    // ↑ still need user.id here — because we INSERT it as the owner

    if (!user) throw new Error("User is not authenticated.");

    const { data, error } = await db
      .from("projects")
      .insert({ name, user_id: user.id })
      .select()
      .single();

    if (error || !data) throw error ?? new Error("Failed to create project.");

    return mapProject(data);
  },

  async delete(id: string) {
    const db = requireSupabase();

    const { error } = await db.from("projects").delete().eq("id", id);
    // ↑ no user_id filter — RLS ensures you can only delete your own

    if (error) throw error;
  },
};
