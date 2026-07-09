import { useState } from "react";
import { projectService } from "../services/Project";

export function useProjects() {
  const [projects, setProjects] = useState(projectService.getAll());

  function addProject(name: string) {
    projectService.create(name);

    setProjects(projectService.getAll());
  }

  return {
    projects,
    addProject,
  };
}
