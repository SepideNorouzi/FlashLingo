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
      className={`min-h-screen flex items-center justify-center px-5 ${styles.page}`}
    >
      <div
        className={`w-full max-w-[560px] cursor-pointer ${styles.cardWrapper}`}
        onClick={() => navigate("/")}
      >
        <CardShell>
          {/* Decorations */}

          <span className="absolute right-8 top-[30%] text-3xl opacity-40">
            🎉
          </span>

          <span
            className={`absolute top-8 left-10 text-2xl opacity-40 ${styles.sparkle1}`}
          >
            ✨
          </span>

          <span
            className={`absolute top-16 right-10 text-3xl ${styles.trophy}`}
          >
            🏆
          </span>

          <span
            className={`absolute bottom-24 left-10 text-xl opacity-35 ${styles.sparkle2}`}
          >
            🌸
          </span>

          <span
            className={`absolute bottom-14 right-12 text-xl opacity-40 ${styles.sparkle3}`}
          >
            ⭐
          </span>

          {/* Top */}

          <div
            className={`relative z-10 text-center space-y-3 ${styles.title}`}
          >
            <p
              className="text-sm font-semibold"
              style={{ color: "var(--primary)" }}
            >
              FlashLingo
            </p>
          </div>

          {/* Middle */}

          <div className="relative z-10 text-center space-y-3">
            <h1
              className="text-4xl md:text-5xl font-bold"
              style={{ color: "var(--text)" }}
            >
              Session Complete
            </h1>

            <p className="text-lg" style={{ color: "var(--text-light)" }}>
              Great work! You reviewed every card.
            </p>

            <div className={`grid grid-cols-2 gap-4 mt-8 ${styles.stats}`}>
              <div className={`rounded-3xl p-5 ${styles.statCard}`}>
                <p className="text-sm" style={{ color: "var(--text-light)" }}>
                  Correct
                </p>

                <p className="text-4xl font-bold"> {correct}</p>
              </div>

              <div
                className="rounded-3xl p-5"
                style={{
                  background: "rgba(255,255,255,.75)",
                }}
              >
                <p className="text-sm" style={{ color: "var(--text-light)" }}>
                  Mistakes
                </p>

                <p className="text-4xl font-bold"> {wrong}</p>
              </div>
            </div>

            <div className={`rounded-3xl mt-6 p-5 ${styles.accuracy}`}>
              <p className="text-sm" style={{ color: "var(--text-light)" }}>
                Accuracy
              </p>

              <p
                className="text-5xl font-bold mt-2"
                style={{ color: "var(--primary)" }}
              >
                {accuracy}%
              </p>
            </div>
          </div>

          {/* Bottom */}

          <div className={`relative z-10 ${styles.footer}`}>
            <div
              className="rounded-full px-6 py-3"
              style={{
                background: "rgba(255,255,255,.8)",
                backdropFilter: "blur(10px)",
              }}
            >
              <p className="text-sm" style={{ color: "var(--text-light)" }}>
                Tap anywhere to return to dashboard
              </p>
            </div>
          </div>
        </CardShell>
      </div>
    </main>
  );
}

export default SessionComplete;
