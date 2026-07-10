import { useState } from "react";
import { projectRepository } from "../repository/projectRepository";

export function useProjects() {
  const [projects, setProjects] = useState(projectRepository.getAll());

  function refresh() {
    setProjects(projectRepository.getAll());
  }

  function addProject(name: string) {
    projectRepository.create(name);
    refresh();
  }

  function deleteProject(id: string) {
    projectRepository.delete(id);
    refresh();
  }

  return {
    projects,
    totalProjects: projects.length,
    addProject,
    deleteProject,
  };
}
