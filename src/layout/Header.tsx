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
    <header className="w-full rounded-3xl bg-[#FFF8F1] p-5 shadow-sm">
      <div className="flex justify-between items-start">
        {/* Left Side */}

        <div className="flex flex-col">
          {/* Greeting */}

          <div>
            <p className="text-sm font-medium text-gray-500">
              👋 Hi, {username}
            </p>

            <h1 className="mt-3 text-xl font-bold leading-tight">
              Welcome back!
            </h1>
          </div>

          {/* Stats */}

          <div className="mt-10 space-y-2">
            <p className="flex items-center gap-2 text-sm text-gray-700">
              <span>📚</span>
              <span>{totalCards} Flashcards</span>
            </p>

            <p className="flex items-center gap-2 text-sm text-gray-700">
              <span>🔥</span>
              <span>{reviewCards} Cards to review</span>
            </p>
          </div>
        </div>

        {/* Right Side */}

        <div className="flex flex-col items-center">
          <p className="text-xs font-medium text-gray-500">{today}</p>

          <img
            src={img}
            alt="Learning"
            className="mt-3 h-30 w-30 rounded-2xl object-fit"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
