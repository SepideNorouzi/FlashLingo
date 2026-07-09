import { mockProjects } from "../data/mockProjects";
import { type Project } from "../types/project";

let projects = [...mockProjects];

export const projectService = {
  getAll() {
    return projects;
  },

  getById(id: string) {
    return projects.find((project) => project.id === id);
  },

  create(name: string): Project {
    const project: Project = {
      id: crypto.randomUUID(),
      name,
      createdAt: new Date().toISOString(),
    };

    projects.push(project);

    return project;
  },

  delete(id: string) {
    projects = projects.filter((project) => project.id !== id);
  },
};
