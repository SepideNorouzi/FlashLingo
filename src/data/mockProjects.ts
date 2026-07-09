import { type Project } from "../types/project";

export const mockProjects: Project[] = [
  {
    id: crypto.randomUUID(),
    name: "Nuovo Espresso 1",
    createdAt: "2026-07-01",
  },
  {
    id: crypto.randomUUID(),
    name: "Nuovo Espresso 2",
    createdAt: "2026-07-02",
  },
  {
    id: crypto.randomUUID(),
    name: "Italian Verbs",
    createdAt: "2026-07-03",
  },
];
