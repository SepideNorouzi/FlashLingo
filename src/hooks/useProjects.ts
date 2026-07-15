import { projectRepository } from "../repository/projectRepository";

export function useProjects() {
  const projects = projectRepository.useProjects();

  return {
    projects,
    totalProjects: projects.length,
    getProject: projectRepository.getById,
  };
}
