import { create } from "zustand";
import { mockProjects } from "../data/mockProjects";
import { type Project } from "../types/project";

interface ProjectStore {
  projects: Project[];

  setProjects: (projects: Project[]) => void;

  addProject: (project: Project) => void;

  updateProject: (id: string, changes: Partial<Project>) => void;

  deleteProject: (id: string) => void;

  resetProjects: () => void;
}

export const useProjectStore = create<ProjectStore>((set) => ({
  projects: structuredClone(mockProjects),

  setProjects: (projects) => set({ projects }),

  addProject: (project) =>
    set((state) => ({
      projects: [...state.projects, project],
    })),

  updateProject: (id, changes) =>
    set((state) => ({
      projects: state.projects.map((project) =>
        project.id === id ? { ...project, ...changes } : project,
      ),
    })),

  deleteProject: (id) =>
    set((state) => ({
      projects: state.projects.filter((project) => project.id !== id),
    })),

  resetProjects: () =>
    set({
      projects: structuredClone(mockProjects),
    }),
}));
