import {type Project } from "../../types/project";

export const adminProjectRepo = {
  getAll() {
    return [];
  },

  useProjects(): Project[] {
    return [];
  },

  getById(id: string) {
    return undefined;
  },

  create(name: string) {},

  delete(id: string) {},
};
