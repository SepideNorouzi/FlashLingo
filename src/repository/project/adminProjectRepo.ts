import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import { projectService } from "../../services/Project";
import type { Project } from "../../types/project";

const PROJECTS_KEY = ["projects"];

export const adminProjectRepo = {
  async getAll() {
    return await projectService.getAll();
  },

  useProjects(): Project[] {
    const { data = [] } = useQuery({
      queryKey: PROJECTS_KEY,
      queryFn: projectService.getAll,
    });

    return data;
  },

  async getById(id: string) {
    return await projectService.getById(id);
  },

  useCreateProject() {
    const queryClient = useQueryClient();

    return useMutation({
      mutationFn: projectService.create,

      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: PROJECTS_KEY,
        });
      },
    });
  },

  useDeleteProject() {
    const queryClient = useQueryClient();

    return useMutation({
      mutationFn: projectService.delete,

      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: PROJECTS_KEY,
        });
      },
    });
  },
};
