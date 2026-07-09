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
      className="w-full overflow-hidden rounded-[30px] p-6"
      style={{
        background: "var(--surface-gradient)",
        boxShadow: "0 12px 30px var(--shadow)",
      }}
    >
      <div className="flex items-start justify-between">
        {/* Left */}

        <div className="flex flex-1 flex-col">
          {/* Greeting */}

          <div>
            <p
              className="text-sm font-medium"
              style={{ color: "var(--text-light)" }}
            >
              👋 Hi, {username}
            </p>

            <h1
              className="mt-2 text-[30px] font-bold leading-tight"
              style={{ color: "var(--text)" }}
            >
              Welcome back!
            </h1>
          </div>

          {/* Stats */}

          <div
            className="mt-8 w-fit rounded-2xl px-4 py-3 backdrop-blur-md"
            style={{
              background: "rgba(255,255,255,.65)",
            }}
          >
            <div className="flex items-center gap-2">
              <BookOpen size={18} style={{ color: "var(--primary)" }} />

              <span className="text-sm" style={{ color: "var(--text)" }}>
                {totalCards} Flashcards
              </span>
            </div>

            <div className="mt-2 flex items-center gap-2">
              <Flame size={18} style={{ color: "var(--secondary)" }} />

              <span className="text-sm" style={{ color: "var(--text)" }}>
                {reviewCards} Cards to review
              </span>
            </div>
          </div>
        </div>

        {/* Right */}

        <div className="flex flex-col items-center">
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

          <div className="relative mt-3 flex h-36 w-36 items-center justify-center">
            {/* Purple Glow */}

            <div
              className="absolute h-24 w-24 rounded-full blur-3xl"
              style={{
                background: "var(--primary)",
                opacity: 0.25,
              }}
            />

            {/* Pink Glow */}

            <div
              className="absolute -right-2 top-8 h-20 w-20 rounded-full blur-3xl"
              style={{
                background: "var(--secondary)",
                opacity: 0.35,
              }}
            />

            {/* Image */}

            <img
              src={img}
              alt="Learning"
              className="relative z-10 h-32 w-32 object-contain"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
