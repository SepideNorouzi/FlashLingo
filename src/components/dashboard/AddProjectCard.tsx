import { useState } from "react";

interface AddProjectCardProps {
  onAdd: (name: string) => void;
}

function AddProjectCard({ onAdd }: AddProjectCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("");

  if (!isEditing) {
    return (
      <button
        onClick={() => setIsEditing(true)}
        className="
          w-full
          rounded-2xl
          border-2
          border-dashed
          border-gray-300
          py-4
          text-gray-500
        "
      >
        + Add Project
      </button>
    );
  }

  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Project name..."
        className="w-full rounded-lg border p-2"
      />

      <div className="mt-3 flex justify-end gap-2">
        <button
          onClick={() => {
            setIsEditing(false);
            setName("");
          }}
        >
          Cancel
        </button>

        <button
          onClick={() => {
            if (!name.trim()) return;

            onAdd(name);

            setName("");
            setIsEditing(false);
          }}
          className="rounded-lg bg-amber-400 px-4 py-2"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default AddProjectCard;
