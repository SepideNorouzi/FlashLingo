import { useState } from "react";

import styles from "../styles/AuthLayout.module.css";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <main
      className={`${styles.page} min-h-screen flex items-center justify-center px-6 py-10`}
      style={{
        background: "var(--bg)",
      }}
    >
      <span className={`${styles.sparkle} ${styles.sparkle1}`}>🌸</span>

      <span className={`${styles.sparkle} ${styles.sparkle2}`}>✨</span>

      <span className={`${styles.sparkle} ${styles.sparkle3}`}>💮</span>

      <span className={`${styles.sparkle} ${styles.sparkle4}`}>🌷</span>

      <span className={`${styles.sparkle} ${styles.sparkle5}`}>✨</span>

      <span className={`${styles.sparkle} ${styles.sparkle6}`}>🌸</span>
      <div
        className="w-full max-w-xl rounded-3xl border p-10"
        style={{
          background: "var(--surface-gradient)",
          borderColor: "var(--border)",
          boxShadow: "0 20px 40px var(--shadow)",
        }}
      >
        <div className="text-center">
          <h2
            className={`${styles.title}
    mt-8
    text-2xl
    sm:text-3xl
    font-semibold`}
            style={{
              color: "var(--text)",
            }}
          >
            {isLogin ? "Welcome back!" : "Create your account"}
          </h2>

          <p
            className={`${styles.subtitle}
    mt-5
    text-base
    sm:text-lg
    leading-7
    max-w-sm
    mx-auto`}
            style={{
              color: "var(--text-light)",
            }}
          >
            {isLogin
              ? "Sign in to continue your learning journey."
              : "Create an account to save your flashcards and study progress."}
          </p>
        </div>

        <form className={`${styles.actions} mt-10 space-y-5`}>
          <div
            className={`
    overflow-hidden
    transition-all
    duration-300
    ${isLogin ? "max-h-0 opacity-0" : "max-h-40 opacity-100"}
  `}
          >
            {!isLogin && (
              <div className="pb-5">
                <label
                  className="mb-2 block text-sm font-medium"
                  style={{
                    color: "var(--text)",
                  }}
                >
                  Username
                </label>

                <input
                  type="text"
                  placeholder="Sepide"
                  className="
w-full
rounded-xl
px-4
py-3
outline-none
transition-all
duration-200
focus:scale-[1.01]
focus:ring-2
"
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderColor: "var(--border)",
                    boxShadow: "0 0 0 transparent",
                  }}
                />
              </div>
            )}
          </div>
          <div>
            <label
              className="mb-2 block text-sm font-medium"
              style={{
                color: "var(--text)",
              }}
            >
              Email
            </label>

            <input
              type="email"
              placeholder="you@example.com"
              className="
w-full
rounded-xl
px-4
py-3
outline-none
transition-all
duration-200
focus:scale-[1.01]
focus:ring-2
"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderColor: "var(--border)",
                boxShadow: "0 0 0 transparent",
              }}
            />
          </div>

          <div>
            <label
              className="mb-2 block text-sm font-medium"
              style={{
                color: "var(--text)",
              }}
            >
              Password
            </label>

            <input
              type="password"
              placeholder="••••••••"
              className="
w-full
rounded-xl
px-4
py-3
outline-none
transition-all
duration-200
focus:scale-[1.01]
focus:ring-2
"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderColor: "var(--border)",
                boxShadow: "0 0 0 transparent",
              }}
            />
          </div>

          <button
            className="
              mt-6
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
            {isLogin ? "Sign In" : "Create Account"}
          </button>
        </form>

        <div
          className="mt-10 text-center"
          style={{
            color: "var(--text-light)",
          }}
        >
          <span>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </span>

          <button
            type="button"
            onClick={() => setIsLogin((prev) => !prev)}
            className="ml-2 font-semibold transition"
            style={{
              color: "var(--primary)",
            }}
          >
            {isLogin ? "Create one" : "Sign In"}
          </button>
        </div>

        <div
          className="mt-12 border-t pt-6 text-center"
          style={{
            borderColor: "var(--border)",
          }}
        >
          <p
            className="text-xs"
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

export default Auth;
