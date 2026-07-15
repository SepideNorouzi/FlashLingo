import { supabase } from "../lib/supabase";
import { authService } from "./auth";

import type { Project } from "../types/project";
import type { ProjectRow } from "../types/database";
// convert database rows (snake_case) into my app models (camelCase)
function mapProject(project: ProjectRow): Project {
  return {
    id: project.id,
    name: project.name,
    createdAt: project.created_at,
  };
}

export const projectService = {
  async getAll() {
    const user = await authService.getUser();

    if (!user) {
      throw new Error("User is not authenticated.");
    }

    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    if (error || !data) {
      throw error ?? new Error("Failed to fetch projects.");
    }

    return data.map(mapProject);
  },

  async getById(id: string) {
    const user = await authService.getUser();

    if (!user) {
      throw new Error("User is not authenticated.");
    }

    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .eq("id", id)
      .eq("user_id", user.id)
      .single();

    if (error || !data) {
      throw error ?? new Error("Project not found.");
    }

    return mapProject(data);
  },

  async create(name: string) {
    const user = await authService.getUser();

    if (!user) {
      throw new Error("User is not authenticated.");
    }

    const { data, error } = await supabase
      .from("projects")
      .insert({
        name,
        user_id: user.id,
      })
      .select()
      .single();

    if (error || !data) {
      throw error ?? new Error("Failed to create project.");
    }

    return mapProject(data);
  },

  async delete(id: string) {
    const user = await authService.getUser();

    if (!user) {
      throw new Error("User is not authenticated.");
    }

    const { error } = await supabase
      .from("projects")
      .delete()
      .eq("id", id)
      .eq("user_id", user.id);

    if (error) {
      throw error;
    }
  },
};
