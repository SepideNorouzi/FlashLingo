import BaseModal from "./BaseModal";
import type { ModalProps } from "../../types/modal";
import { useAuth } from "../../hooks/useAuth";

function SettingModal(props: ModalProps) {
  const { logout, loading, isAuthenticated } = useAuth();

  async function handleLogout() {
    try {
      await logout();
      props.onClose();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <BaseModal {...props} title="Settings">
      <div className="space-y-6">
        <p>
          Settings has no functionality yet. If you're looking for dark mode...
          you are in the wrong place. This app believes in sunlight and eye
          strain apparently.
        </p>

        {isAuthenticated ? (
          <button
            onClick={handleLogout}
            disabled={loading}
            className="
              w-full
              rounded-xl
              py-3
              font-semibold
              transition
              hover:opacity-90
              disabled:opacity-50
            "
            style={{
              background: "#dc2626",
              color: "white",
            }}
          >
            {loading ? "Signing out..." : "Sign Out"}
          </button>
        ) : (
          <p
            className="text-center text-sm"
            style={{ color: "var(--text-light)" }}
          >
            You are currently in Demo Mode.
          </p>
        )}
      </div>
    </BaseModal>
  );
}

export default SettingModal;
