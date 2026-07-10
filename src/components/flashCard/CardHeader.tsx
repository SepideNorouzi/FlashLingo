import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

import ProgressBar from "./ProgressBar";

interface CardHeaderProps {
  current: number;
  total: number;
}

function CardHeader({ current, total }: CardHeaderProps) {
  return (
    <header className="mb-5">
      {/* Top Row */}
      <div className="flex items-center justify-between">
        <Link
          to="/dashboard"
          className="
            flex
            items-center
            gap-2
            text-sm
            transition-opacity
            hover:opacity-70
          "
          style={{ color: "var(--text-light)" }}
        >
          <ArrowLeft size={18} />
          Dashboard
        </Link>

        <h2
          className="text-lg font-bold tracking-tight"
          style={{ color: "var(--text)" }}
        >
          FlashLingo 🌸
        </h2>
      </div>

      {/* Counter */}
      <div className=" flex justify-center">
        <span
          className="
            rounded-full
            px-4
            py-1.5
            text-sm
            font-semibold
          "
          style={{
            background: "var(--primary-light)",
            color: "var(--primary)",
          }}
        >
          {current} / {total}
        </span>
      </div>

      {/* Progress */}
      <div className="mt-1 flex justify-center">
        <div className="w-full max-w-sm">
          <ProgressBar
            current={current}
            total={total}
          />
        </div>
      </div>
    </header>
  );
}

export default CardHeader;