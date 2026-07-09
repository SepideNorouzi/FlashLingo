interface ProjectCardProps {
  name: string;
  flashcardCount: number;
  onClick: () => void;
}

function ProjectCard({ name, flashcardCount, onClick }: ProjectCardProps) {
  return (
    <button
      onClick={onClick}
      className="
        flex
        w-full
        items-center
        justify-between
        rounded-2xl
        bg-white
        px-5
        py-4
        shadow-sm
        transition
        hover:shadow-md
        active:scale-[0.98]
      "
    >
      <p className="font-medium">{name}</p>

      <span className="text-sm text-gray-500">{flashcardCount} cards</span>
    </button>
  );
}

export default ProjectCard;
