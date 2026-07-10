import type { ReactNode } from "react";

interface CardShellProps {
  children: ReactNode;
  background?: string;
}

function CardShell({ children, background }: CardShellProps) {
  return (
    <div
      className="
        relative
        mx-auto
        flex
        h-[350px]
        w-full
        max-w-[420px]
        flex-col
        items-center
        justify-between
        overflow-hidden
        rounded-[36px]
        border
        p-8
        md:h-[420px]
        md:max-w-[560px]
      "
      style={{
        background: background ?? "white",
        borderColor: "var(--border)",
        boxShadow: "0 25px 60px var(--shadow)",
      }}
    >
      {/* Decorative Blobs */}
      <div
        className="absolute -left-16 -top-16 h-44 w-44 rounded-full blur-3xl"
        style={{ background: "rgba(200,200,255,.4)", opacity: 0.6 }}
      />
      <div
        className="absolute -bottom-12 -right-12 h-36 w-36 rounded-full blur-3xl"
        style={{ background: "rgba(255,200,220,.4)", opacity: 0.6 }}
      />

      {children}
    </div>
  );
}

export default CardShell;
