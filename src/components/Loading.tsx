function Loading() {
  return (
    <main
      className="flex min-h-screen items-center justify-center"
      style={{ background: "var(--bg)" }}
    >
      <div className="relative flex items-center justify-center">
        {/* Outer ring */}
        <div
          className="h-16 w-16 animate-spin rounded-full border-4 border-transparent"
          style={{
            borderTopColor: "var(--primary)",
            borderRightColor: "var(--secondary)",
          }}
        />

        {/* Inner ring */}
        <div
          className="absolute h-10 w-10 animate-spin rounded-full border-4 border-transparent [animation-direction:reverse] [animation-duration:1.5s]"
          style={{
            borderBottomColor: "var(--accent)",
            borderLeftColor: "var(--primary-light)",
          }}
        />
      </div>
    </main>
  );
}

export default Loading;
