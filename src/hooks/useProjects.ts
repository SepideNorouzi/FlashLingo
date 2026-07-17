import { projectRepository } from "../repository/projectRepository";

export function useProjects() {
  const projects = projectRepository.useProjects();

  const getProject = (id: string) =>
    projects.find((project) => project.id === id);

  return {
    projects,
    totalProjects: projects.length,
    getProject,
  };
}
