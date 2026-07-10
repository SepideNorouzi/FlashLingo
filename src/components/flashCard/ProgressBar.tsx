interface ProgressBarProps {
  current: number;
  total: number;
}

function ProgressBar({ current, total }: ProgressBarProps) {
  const progress = (current / total) * 100;

  return (
    <div
      className="
    mt-2
    h-1.5
    w-full
    max-w-sm
    overflow-hidden
    rounded-full
  "
      style={{
        background: "var(--border)",
      }}
    >
      <div
        className="
          h-full
          rounded-full
          transition-all
          duration-500
        "
        style={{
          width: `${progress}%`,
          background: "var(--button-gradient)",
        }}
      />
    </div>
  );
}

export default ProgressBar;
