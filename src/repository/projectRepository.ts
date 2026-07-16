// src/repository/projectRepository.ts
import { useModeStore } from "../store/modeStore";
import { adminProjectRepo } from "./project/adminProjectRepo";
import { demoProjectRepo } from "./project/demoProjectRepo";

export const projectRepository = {
  useProjects() {
    const mode = useModeStore((s) => s.mode);
    const demoProjects = demoProjectRepo.useProjects(); //  always called
    const adminProjects = adminProjectRepo.useProjects(); //  always called

    return mode === "demo" ? demoProjects : adminProjects;
  },

  useCreateProject() {
    const mode = useModeStore((s) => s.mode);
    const demoMutation = demoProjectRepo.useCreateProject();
    const adminMutation = adminProjectRepo.useCreateProject();

    return mode === "demo" ? demoMutation : adminMutation;
  },

  useDeleteProject() {
    const mode = useModeStore((s) => s.mode);
    const demoMutation = demoProjectRepo.useDeleteProject();
    const adminMutation = adminProjectRepo.useDeleteProject();

    return mode === "demo" ? demoMutation : adminMutation;
  },
};
