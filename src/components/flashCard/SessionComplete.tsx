import { useNavigate } from "react-router";
import CardShell from "./CardShell";

import styles from "../../styles/SessionComplete.module.css";

interface SessionCompleteProps {
  correct: number;
  wrong: number;
}

function SessionComplete({ correct, wrong }: SessionCompleteProps) {
  const navigate = useNavigate();

  const total = correct + wrong;
  const accuracy = total === 0 ? 0 : Math.round((correct / total) * 100);

  return (
    <main
      className={`min-h-screen flex items-center justify-center px-4 sm:px-6 ${styles.page}`}
    >
      <div
        className={`
          w-full
          max-w-[360px]
          sm:max-w-[430px]
          md:max-w-[560px]
          cursor-pointer
          ${styles.cardWrapper}
        `}
        onClick={() => navigate("/dashboard")}
      >
        <CardShell>
          {/* Floating decorations */}

          <span
            className={`absolute top-[9%] left-[8%] text-xl md:text-2xl ${styles.sparkle1}`}
          >
            ✨
          </span>

          <span
            className={`absolute top-[7%] right-[8%] text-3xl md:text-4xl ${styles.trophy}`}
          >
            🏆
          </span>

          <span
            className={`absolute bottom-[18%] left-[10%] text-lg md:text-xl ${styles.sparkle2}`}
          >
            🌸
          </span>

          <span
            className={`absolute bottom-[14%] right-[10%] text-lg md:text-xl ${styles.sparkle3}`}
          >
            ⭐
          </span>

          {/* Header */}

          <div
            className={`relative z-10 flex flex-col items-center ${styles.title}`}
          >
            <p
              className="text-xs sm:text-sm font-semibold tracking-wide"
              style={{ color: "var(--primary)" }}
            >
              FlashLingo
            </p>

            <h1
              className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-center"
              style={{ color: "var(--text)" }}
            >
              Session Complete
            </h1>

            <p
              className="mt-3 max-w-[240px] sm:max-w-xs text-center text-sm sm:text-base md:text-lg"
              style={{ color: "var(--text-light)" }}
            >
              Great work! You reviewed every card.
            </p>
          </div>

          {/* Statistics */}

          <div
            className={`relative z-10 mt-8 grid grid-cols-3 gap-3 md:gap-4 ${styles.stats}`}
          >
            <div
              className={`${styles.statCard} rounded-2xl p-3 sm:p-4 md:p-5 text-center`}
            >
              <p
                className="text-[11px] sm:text-xs md:text-sm"
                style={{ color: "var(--text-light)" }}
              >
                ✅ Correct
              </p>

              <p
                className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold"
                style={{ color: "var(--text)" }}
              >
                {correct}
              </p>
            </div>

            <div
              className={`${styles.statCard} rounded-2xl p-3 sm:p-4 md:p-5 text-center`}
            >
              <p
                className="text-[11px] sm:text-xs md:text-sm"
                style={{ color: "var(--text-light)" }}
              >
                🎯 Accuracy
              </p>

              <p
                className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold"
                style={{ color: "var(--primary)" }}
              >
                {accuracy}%
              </p>
            </div>

            <div
              className={`${styles.statCard} rounded-2xl p-3 sm:p-4 md:p-5 text-center`}
            >
              <p
                className="text-[11px] sm:text-xs md:text-sm"
                style={{ color: "var(--text-light)" }}
              >
                🌱 Review
              </p>

              <p
                className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold"
                style={{ color: "var(--text)" }}
              >
                {wrong}
              </p>
            </div>
          </div>


          {/* Footer */}
          <div className="relative z-10 w-full flex justify-center">
            <p
              className="text-center text-xs sm:text-sm w-full px-2"
              style={{ color: "var(--text-light)" }}
            >
              Tap anywhere to return to dashboard
            </p>
          </div>
        </CardShell>
      </div>
    </main>
  );
}

export default SessionComplete;
