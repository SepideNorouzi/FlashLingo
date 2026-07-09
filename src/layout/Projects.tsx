import { useNavigate } from "react-router";
import AddProjectCard from "../components/dashboard/AddProjectCard";
import ProjectCard from "../components/dashboard/ProjectCard";
import { useProjects } from "../hooks/useProjects";

function Projects() {
  const { projects, addProject } = useProjects();
  const navigate = useNavigate();

  return (
    <section className="mt-6 rounded-3xl bg-[#FFF8F1] p-5 shadow-sm">
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-xl font-bold">Projects</h2>

        <span className="rounded-full bg-white px-3 py-1 text-sm text-gray-600 shadow-sm">
          {projects.length}
        </span>
      </div>

      {/* Scrollable List */}
      <div className="max-h-72 space-y-3 overflow-y-auto pr-1">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            name={project.name}
            flashcardCount={10}
            onClick={() => navigate(`/flashcards?projectId=${project.id}`)}
          />
        ))}

        <AddProjectCard onAdd={addProject} />
      </div>
    </section>
  );
}

export default Projects;
