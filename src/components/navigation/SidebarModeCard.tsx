import { useModeStore } from "../../store/modeStore";

function SidebarModeCard() {
  const mode = useModeStore((state) => state.mode);
  return (
    <div
      className="flex flex-col items-center rounded-3xl p-5 text-center"
      style={{
        background:
          "linear-gradient(135deg,var(--primary-light),var(--secondary-light))",
      }}
    >
      {mode === "demo" ? (
        <>
          <p className="font-semibold" style={{ color: "var(--primary)" }}>
            🌸 Demo Mode
          </p>

          <span
            className="mt-2 text-sm leading-relaxed"
            style={{ color: "var(--text-light)" }}
          >
            All your data stays on this device.
          </span>
        </>
      ) : (
        <>
          <p className="font-semibold" style={{ color: "var(--primary)" }}>
            👤 Admin Mode
          </p>

          <span
            className="mt-2 text-sm leading-relaxed"
            style={{ color: "var(--text-light)" }}
          >
            Changes are synced with your account.
          </span>
        </>
      )}
    </div>
  );
}

export default SidebarModeCard;
