import { useProjectStore } from "../../store/demoProjectStore";
import { type Project } from "../../types/project";

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

  create(name: string) {
    const project: Project = {
      id: crypto.randomUUID(),
      name,
      createdAt: new Date().toISOString(),
    };

    useProjectStore.getState().addProject(project);

    return project;
  },

  delete(id: string) {
    useProjectStore.getState().deleteProject(id);
  },
};
