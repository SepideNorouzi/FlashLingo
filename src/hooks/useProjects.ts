import { projectRepository } from "../repository/projectRepository";

export function useProjects() {
  const projects = projectRepository.useProjects();

  return {
    projects,

    totalProjects: projects.length,

    addProject: projectRepository.create,

    deleteProject: projectRepository.delete,
  };
}
