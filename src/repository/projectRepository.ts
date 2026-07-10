import { useModeStore } from "../store/modeStore";
import { adminProjectRepo } from "./project/adminProjectRepo";
import { demoProjectRepo } from "./project/demoProjectRepo";

function repo() {
  return useModeStore.getState().mode === "demo"
    ? demoProjectRepo
    : adminProjectRepo;
}

export const projectRepository = {
  getAll() {
    return repo().getAll();
  },

   useProjects() {
        return repo().useProjects();
    },

  getById(id: string) {
    return repo().getById(id);
  },

  create(name: string) {
    return repo().create(name);
  },

  delete(id: string) {
    return repo().delete(id);
  },
};
