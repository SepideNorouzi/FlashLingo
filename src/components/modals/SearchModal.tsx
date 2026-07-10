import { useMemo, useState } from "react";
import { useNavigate } from "react-router";

import BaseModal from "./BaseModal";
import type { ModalProps } from "../../types/modal";
import { useProjects } from "../../hooks/useProjects";

function SearchModal({ onClose, ...props }: ModalProps) {
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const { projects } = useProjects();

  const hasQuery = query.trim().length > 0;

  const filteredProjects = useMemo(() => {
    const value = query.trim().toLowerCase();

    if (!value) return [];

    return projects.filter((project) =>
      project.name.toLowerCase().includes(value),
    );
  }, [projects, query]);

  function openProject(projectId: string) {
    navigate(`/flashcards?projectId=${projectId}`);
    onClose();
  }

  return (
    <BaseModal {...props} onClose={onClose} title="Search">
      <div className="space-y-5">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search projects..."
          className="
            w-full
            rounded-xl
            border
            p-3
            outline-none
            transition
            focus:ring-2
          "
          style={{
            borderColor: "var(--border)",
            background: "var(--surface)",
          }}
        />

        {!hasQuery && (
          <p
            className="py-8 text-center text-sm"
            style={{ color: "var(--text-light)" }}
          >
            Start typing a project name to begin studying.
          </p>
        )}

        {hasQuery && (
          <div className="max-h-72 space-y-2 overflow-y-auto">
            {filteredProjects.length === 0 ? (
              <p
                className="py-6 text-center text-sm"
                style={{ color: "var(--text-light)" }}
              >
                No matching projects.
              </p>
            ) : (
              filteredProjects.map((project) => (
                <button
                  key={project.id}
                  onClick={() => openProject(project.id)}
                  className="
                    w-full
                    rounded-xl
                    border
                    p-4
                    text-left
                    transition
                    hover:-translate-y-0.5
                  "
                  style={{
                    borderColor: "var(--border)",
                    background: "var(--surface-soft)",
                  }}
                >
                  <h3
                    className="font-semibold"
                    style={{ color: "var(--text)" }}
                  >
                    {project.name}
                  </h3>

                  <p
                    className="mt-1 text-sm"
                    style={{ color: "var(--text-light)" }}
                  >
                    Open study session →
                  </p>
                </button>
              ))
            )}
          </div>
        )}
      </div>
    </BaseModal>
  );
}

export default SearchModal;
