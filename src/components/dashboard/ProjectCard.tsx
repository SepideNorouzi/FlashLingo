import { Trash2 } from "lucide-react";

interface ProjectCardProps {
  name: string;
  flashcardCount: number;
  onClick: () => void;
  onDelete: () => void;
}

function ProjectCard({
  name,
  flashcardCount,
  onClick,
  onDelete,
}: ProjectCardProps) {
  return (
    <div
      className="
        flex
        items-center
        justify-between
        rounded-2xl
        border
        p-5
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
      "
      style={{
        background:
          "linear-gradient(135deg,var(--surface),var(--surface-soft))",
        borderColor: "var(--border)",
      }}
    >
      {/* Clickable project */}
      <button
  onClick={onClick}
  className="flex flex-1 items-center gap-3 text-left min-w-0"
>
  <div className="min-w-0 flex-1">
    <h3
      className="truncate text-base font-semibold sm:text-lg"
      style={{ color: "var(--text)" }}
    >
      {name}
    </h3>
  </div>

  <span
    className="
      shrink-0
      whitespace-nowrap
      rounded-full
      px-3
      py-1
      text-xs
      font-semibold
      sm:text-sm
    "
    style={{
      background: "var(--primary-light)",
      color: "var(--primary)",
    }}
  >
    {flashcardCount} cards
  </span>
</button>

      {/* Delete */}
      <button
        onClick={onDelete}
        className="
          ml-4
          rounded-xl
          p-2
          transition-all
          hover:bg-red-50
          active:scale-95
        "
        aria-label="Delete project"
      >
        <Trash2
          size={18}
          className="text-red-500"
        />
      </button>
    </div>
  );
}

export default ProjectCard;