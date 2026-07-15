import { useMutation } from "@tanstack/react-query";

import { useProjectStore } from "../../store/demoProjectStore";
import type { Project } from "../../types/project";

export const demoProjectRepo = {
  getAll() {
    return useProjectStore.getState().projects;
  },

  useProjects() {
    return useProjectStore((state) => state.projects);
  },

  getById(id: string) {
    return useProjectStore
      .getState()
      .projects.find((project) => project.id === id);
  },

  useCreateProject() {
    return useMutation({
      mutationFn: async (name: string) => {
        const project: Project = {
          id: crypto.randomUUID(),
          name,
          createdAt: new Date().toISOString(),
        };

        useProjectStore.getState().addProject(project);

        return project;
      },
    });
  },

  useDeleteProject() {
    return useMutation({
      mutationFn: async (id: string) => {
        useProjectStore.getState().deleteProject(id);
      },
    });
  },
};
