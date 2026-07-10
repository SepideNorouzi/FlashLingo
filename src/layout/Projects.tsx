import { useNavigate } from "react-router";
import AddProjectCard from "../components/dashboard/AddProjectCard";
import ProjectCard from "../components/dashboard/ProjectCard";

import { useProjects } from "../hooks/useProjects";
import { useFlashcards } from "../hooks/useCards";

function Projects() {
  const navigate = useNavigate();

  const { projects, totalProjects, addProject, deleteProject } = useProjects();

  const { cards } = useFlashcards();

  return (
    <section
      className="mt-8 rounded-[30px] border p-6"
      style={{
        background:
          "linear-gradient(135deg,var(--primary-light),var(--secondary-light))",
        borderColor: "var(--border)",
        boxShadow: "0 15px 35px var(--shadow)",
      }}
    >
      {/* Header */}
      <div
        className="mb-6 flex items-center justify-between border-l-4 pl-4"
        style={{
          borderColor: "var(--primary)",
        }}
      >
        <div>
          <h2 className="text-2xl font-bold" style={{ color: "var(--text)" }}>
            Projects
          </h2>

          <p className="mt-1 text-sm" style={{ color: "var(--text-light)" }}>
            Organize your flashcard collections.
          </p>
        </div>

        <span
          className="rounded-full px-4 py-1 text-sm font-semibold"
          style={{
            background: "var(--primary-light)",
            color: "var(--primary)",
          }}
        >
          {totalProjects}
        </span>
      </div>

      {/* List */}
      <div className="custom-scrollbar max-h-80 space-y-4 overflow-y-auto pr-4">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            name={project.name}
            flashcardCount={
              cards.filter((card) => card.projectId === project.id).length
            }
            onClick={() => navigate(`/flashcards?projectId=${project.id}`)}
            onDelete={() => deleteProject(project.id)}
          />
        ))}

        <AddProjectCard onAdd={addProject} />
      </div>
    </section>
  );
}

export default Projects;
