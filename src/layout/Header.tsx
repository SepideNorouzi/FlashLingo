import { BookOpen, Flame } from "lucide-react";
import img from "../assets/images/header.svg";

interface HeaderProps {
  username: string;
  reviewCards: number;
  totalCards: number;
}

function Header({ username, reviewCards, totalCards }: HeaderProps) {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
  });

  return (
    <header
      className="w-full overflow-hidden rounded-[30px] p-6 md:p-8"
      style={{
        background: "var(--surface-gradient)",
        border: "1px solid var(--border)",
      }}
    >
      <div className="flex items-center justify-between gap-4">
        {/* Left */}
        <div className="flex flex-1 flex-col gap-5">
          {/* Greeting */}
          <div>
            <p
              className="text-xs font-medium md:text-sm"
              style={{ color: "var(--text-light)" }}
            >
              👋 Hi, {username}
            </p>

            <h1
              className="mt-1 text-3xl font-bold leading-tight md:text-4xl"
              style={{ color: "var(--text)" }}
            >
              Welcome back!
            </h1>
          </div>

          {/* Stats — inline row */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div
                className="flex h-7 w-7 items-center justify-center rounded-lg"
                style={{ background: "var(--primary-light)" }}
              >
                <BookOpen size={14} style={{ color: "var(--primary)" }} />
              </div>
              <span
                className="text-xs font-medium whitespace-nowrap md:text-sm"
                style={{ color: "var(--text)" }}
              >
                {totalCards} Flashcards
              </span>
            </div>

            <div className="flex items-center gap-2">
              <div
                className="flex h-7 w-7 items-center justify-center rounded-lg"
                style={{ background: "var(--secondary-light)" }}
              >
                <Flame size={14} style={{ color: "var(--secondary)" }} />
              </div>
              <span
                className="text-xs font-medium whitespace-nowrap md:text-sm"
                style={{ color: "var(--text)" }}
              >
                {reviewCards} to review
              </span>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col items-end gap-2">
          {/* Day pill */}
          <div
            className="rounded-full px-4 py-1 text-xs font-semibold"
            style={{
              background: "var(--secondary-light)",
              color: "var(--primary)",
            }}
          >
            {today}
          </div>

          {/* Illustration */}
          <div className="relative flex h-36 w-36 items-center justify-center md:h-44 md:w-44">
            <div
              className="absolute h-24 w-24 rounded-full blur-3xl md:h-32 md:w-32"
              style={{ background: "var(--primary)", opacity: 0.2 }}
            />
            <div
              className="absolute -right-2 top-8 h-20 w-20 rounded-full blur-3xl"
              style={{ background: "var(--secondary)", opacity: 0.25 }}
            />
            <img
              src={img}
              alt="Learning"
              className="relative z-10 h-44 w-44 object-contain md:h-56 md:w-56"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
