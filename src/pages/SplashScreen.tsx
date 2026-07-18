import styles from "../styles/AuthLayout.module.css";

function SplashScreen() {
  return (
    <main
      className="flex min-h-screen items-center justify-center overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      <div className={`${styles.splash} flex flex-col items-center`}>
        <div
          className="mb-6 flex h-28 w-28 items-center justify-center rounded-4xl"
          style={{
            background:
              "linear-gradient(135deg, var(--secondary-light) 0%, var(--primary-light) 100%)",
            boxShadow: "0 20px 50px var(--shadow)",
          }}
        >
          <span
            className="text-5xl"
            style={{
              color: "var(--secondary)",
            }}
          >
            🌸
          </span>
        </div>

        <h1
          className="text-5xl font-extrabold tracking-tight"
          style={{ color: "var(--text)" }}
        >
          FlashLingo
        </h1>

        <p className="mt-5 text-lg" style={{ color: "var(--text-light)" }}>
          Learn one flashcard at a time.
        </p>
      </div>
    </main>
  );
}

export default SplashScreen;
