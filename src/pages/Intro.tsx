import { useNavigate } from "react-router";
import { useModeStore } from "../store/modeStore";

import styles from "../styles/AuthLayout.module.css";
import { useEffect, useState } from "react";
import SplashScreen from "./SplashScreen";

function Intro() {
  const navigate = useNavigate();

  const setMode = useModeStore((state) => state.setMode);
  const [showSplash, setShowSplash] = useState(true);
  const [fadeSplash, setFadeSplash] = useState(false);

  useEffect(() => {
    // Start fading after 1.8s
    const fadeTimer = setTimeout(() => {
      setFadeSplash(true);
    }, 1800);

    // Remove splash after fade finishes
    const removeTimer = setTimeout(() => {
      setShowSplash(false);
    }, 2200);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  function handleDemo() {
    setMode("demo");
    navigate("/dashboard");
  }

  function handleLogin() {
    setMode("admin");
    navigate("/auth");
  }

  return (
    <>
      {showSplash && (
        <div
          className={`
        fixed inset-0 z-50
        ${fadeSplash ? styles.fadeOut : ""}
      `}
        >
          <SplashScreen />
        </div>
      )}
      <main
        className={`${styles.page} min-h-screen flex items-center justify-center px-6 py-10`}
        style={{
          background: "var(--bg)",
        }}
      >
        <span
          className={`hidden sm:block ${styles.sparkle} ${styles.sparkle1}`}
        >
          🌸
        </span>

        <span className={`${styles.sparkle} ${styles.sparkle2}`}>✨</span>

        <span className={`${styles.sparkle} ${styles.sparkle3}`}>💮</span>

        <span className={`${styles.sparkle} ${styles.sparkle4}`}>🌷</span>

        <span className={`${styles.sparkle} ${styles.sparkle5}`}>✨</span>

        <span className={`${styles.sparkle} ${styles.sparkle6}`}>🌸</span>
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
              className={`${styles.title}
    text-3xl
    sm:text-3xl
    md:text-4xl
    font-bold
    tracking-tight`}
            >
              <span className={styles.flower}>🌸</span> FlashLingo
            </h1>

            <p
              className="
mt-6
text-base
sm:text-lg
leading-7
sm:leading-8
max-w-sm
mx-auto
"
              style={{
                color: "var(--text-light)",
              }}
            >
              Learn languages one flashcard at a time.
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
              FlashLingo v0.1
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default Intro;
