import { useState } from "react";
import { projectService } from "../services/Project";

export function useProjects() {
  const [projects, setProjects] = useState(projectService.getAll());

  function refresh() {
    setProjects(projectService.getAll());
  }

  function addProject(name: string) {
    projectService.create(name);
    refresh();
  }

  function deleteProject(id: string) {
    projectService.delete(id);
    refresh();
  }

  return {
    projects,
    totalProjects: projects.length,
    addProject,
    deleteProject,
  };
}
