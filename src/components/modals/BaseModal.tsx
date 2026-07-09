import type { ReactNode } from "react";
import type { ModalProps } from "../../types/modal";

interface BaseModalProps extends ModalProps {
  title: string;
  children: ReactNode;
}

function BaseModal({ open, onClose, title, children }: BaseModalProps) {
  if (!open) return null;

  return (
    <div
      onClick={onClose}
      className="
        fixed inset-0 z-50
        flex items-center justify-center
        bg-black/40
        backdrop-blur-sm
        p-4
      "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          w-full
          max-w-lg
          rounded-3xl
          bg-[#FFF8F1]
          p-6
          shadow-xl
        "
      >
        {/* Header */}

        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">{title}</h2>

          <button
            onClick={onClose}
            className="
              rounded-full
              p-2
              transition
              hover:bg-stone-200
            "
          >
            ✕
          </button>
        </div>

        {/* Content */}

        {children}
      </div>
    </div>
  );
}

export default BaseModal;
