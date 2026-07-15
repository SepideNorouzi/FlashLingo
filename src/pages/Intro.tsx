import { useNavigate } from "react-router";
import { useModeStore } from "../store/modeStore";

function Intro() {
  const navigate = useNavigate();

  const setMode = useModeStore((state) => state.setMode);

  function handleDemo() {
    setMode("demo");
    navigate("/dashboard");
  }

  function handleLogin() {
    setMode("admin");
    navigate("/auth");
  }

  return (
    <main
      className="
        min-h-screen
        flex
        items-center
        justify-center
        px-6
        py-10
      "
      style={{
        background: "var(--bg)",
      }}
    >
      <div
        className="
          w-full
          max-w-xl
          rounded-3xl
          p-10
          border
        "
        style={{
          background: "var(--surface-gradient)",
          borderColor: "var(--border)",
          boxShadow: "0 20px 40px var(--shadow)",
        }}
      >
        <div className="text-center">
          <h1
            className="
              text-5xl
              font-bold
            "
            style={{
              color: "var(--text)",
            }}
          >
            🌸 FlashLingo
          </h1>

          <p
            className="
              mt-5
              text-lg
              leading-8
            "
            style={{
              color: "var(--text-light)",
            }}
          >
            Learn languages one flashcard at a time.
            <br />
            Build your own decks, review consistently, and remember more every
            day.
          </p>
        </div>

        <div className="mt-12 space-y-5">
          <button
            onClick={handleDemo}
            className="
              w-full
              rounded-2xl
              py-4
              text-lg
              font-semibold
              transition-all
              duration-200
              hover:scale-[1.02]
              active:scale-[0.98]
            "
            style={{
              background: "var(--button-gradient)",
              color: "white",
            }}
          >
            Continue in Demo
          </button>

          <p
            className="text-center text-sm"
            style={{
              color: "var(--text-light)",
            }}
          >
            Explore FlashLingo with sample projects and flashcards.
          </p>

          <div className="flex items-center py-2">
            <div
              className="flex-1 h-px"
              style={{
                background: "var(--border)",
              }}
            />

            <span
              className="px-4 text-sm font-medium"
              style={{
                color: "var(--text-light)",
              }}
            >
              OR
            </span>

            <div
              className="flex-1 h-px"
              style={{
                background: "var(--border)",
              }}
            />
          </div>

          <button
            onClick={handleLogin}
            className="
              w-full
              rounded-2xl
              py-4
              text-lg
              font-semibold
              transition-all
              duration-200
              hover:scale-[1.02]
              active:scale-[0.98]
            "
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              color: "var(--primary)",
            }}
          >
            Sign In
          </button>

          <p
            className="text-center text-sm"
            style={{
              color: "var(--text-light)",
            }}
          >
            Access your own projects and save your learning progress.
          </p>
        </div>

        <div
          className="
            mt-12
            pt-6
            text-center
            border-t
          "
          style={{
            borderColor: "var(--border)",
          }}
        >
          <p
            className="mt-2 text-xs"
            style={{
              color: "var(--text-light)",
            }}
          >
            FlashLingo v1.0
          </p>
        </div>
      </div>
    </main>
  );
}

export default Intro;
