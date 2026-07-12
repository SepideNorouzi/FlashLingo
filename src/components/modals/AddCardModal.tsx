import BaseModal from "./BaseModal";
import type { ModalProps } from "../../types/modal";
import { useState } from "react";
import { useProjects } from "../../hooks/useProjects";
import { cardRepository } from "../../repository/cardRepository";

function AddCardModal(props: ModalProps) {
  const [word, setWord] = useState("");
  const [pronunciation, setPronunciation] = useState("");
  const [meaning, setMeaning] = useState("");
  const [projectId, setProjectId] = useState("");

  const { projects } = useProjects();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!word.trim() || !meaning.trim() || !projectId) return;

    cardRepository.create({
      id: crypto.randomUUID(),
      word,
      pronunciation,
      meaning,
      projectId,
      learned: false,
      mistake: false,
      createdAt: new Date().toISOString(),
    });

    props.onClose();
  };

  return (
    <BaseModal {...props} title="Add Flashcard">
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Project */}

        <div className="space-y-2">
          <label className="input-label" style={{ color: "var(--text)" }}>
            Project
          </label>

          <select
            value={projectId}
            onChange={(e) => setProjectId(e.target.value)}
            className="
          w-full
          rounded-2xl
          border
          px-4
          py-3
          outline-none
          transition-all
          duration-200
          focus:ring-2
        "
            style={{
              background: "var(--surface-soft)",
              borderColor: "var(--border)",
            }}
          >
            <option value="">Choose a project...</option>

            {projects.map((project) => (
              <option key={project.id} value={project.id}>
                {project.name}
              </option>
            ))}
          </select>
        </div>

        {/* Word */}

        <div>
          <label className="input-label">Word</label>

          <input
            value={word}
            onChange={(e) => setWord(e.target.value)}
            placeholder="es. buongiorno"
            className="input-field"
          />
        </div>

        {/* Pronunciation */}

        <div>
          <label className="input-label">Pronunciation</label>

          <input
            value={pronunciation}
            onChange={(e) => setPronunciation(e.target.value)}
            placeholder="Optional"
            className="input-field"
          />
        </div>

        {/* Meaning */}

        <div>
          <label className="input-label">Meaning</label>

          <textarea
            rows={2}
            value={meaning}
            onChange={(e) => setMeaning(e.target.value)}
            placeholder="English meaning..."
            className="input-field resize-none"
          />
        </div>

        {/* Buttons */}

        <div className="flex justify-end gap-3 pt-2">
          <button type="button" onClick={props.onClose}>
            Cancel
          </button>

          <button
            type="submit"
            className="
          rounded-xl
          px-6
          py-2.5
          font-semibold
          text-white
          transition-all
          duration-200
          hover:-translate-y-0.5
          hover:shadow-lg
          active:scale-95
        "
            style={{
              background: "var(--button-gradient)",
            }}
          >
            Add Card 🌸
          </button>
        </div>
      </form>
    </BaseModal>
  );
}

export default AddCardModal;
