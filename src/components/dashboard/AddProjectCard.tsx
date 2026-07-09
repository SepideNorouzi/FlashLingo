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
    group
    w-full
    rounded-2xl
    border-2
    border-dashed
    py-5
    text-base
    font-semibold
    transition-all
    duration-300
    hover:-translate-y-1
    hover:shadow-md
    active:scale-[0.98]
  "
        style={{
          borderColor: "var(--border)",
          background: "var(--surface-soft)",
          color: "var(--text-light)",
        }}
      >
        <span className="transition group-hover:text-violet-500">
          + Add Project
        </span>
      </button>
    );
  }

  return (
    <div
      className="rounded-2xl border p-5"
      style={{
        background: "var(--surface)",
        borderColor: "var(--border)",
        boxShadow: "0 10px 25px var(--shadow)",
      }}
    >
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Project name..."
        className="
  w-full
  rounded-xl
  border
  px-4
  py-3
  outline-none
  transition
  focus:ring-2
"
        style={{
          borderColor: "var(--border)",
          boxShadow: "0 0 0 2px transparent",
        }}
      />

      <div className="mt-4 flex justify-end gap-3">
        <button
          onClick={() => {
            setIsEditing(false);
            setName("");
          }}
          className="
      rounded-xl
      px-4
      py-2
      font-medium
      transition-colors
      hover:bg-gray-100
    "
          style={{ color: "var(--text-light)" }}
        >
          Cancel
        </button>

        <button
          onClick={() => {
            if (!name.trim()) return;

            onAdd(name.trim());

            setName("");
            setIsEditing(false);
          }}
          disabled={!name.trim()}
          className={`
      rounded-xl
      px-5
      py-2
      font-medium
      text-white
      transition-all
      ${
        !name.trim()
          ? "cursor-not-allowed opacity-50"
          : "hover:-translate-y-0.5 hover:brightness-105 active:scale-95"
      }
    `}
          style={{
            background: "var(--button-gradient)",
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default AddProjectCard;
