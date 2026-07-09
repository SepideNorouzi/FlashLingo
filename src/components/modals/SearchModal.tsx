import BaseModal from "./BaseModal";
import type { ModalProps } from "../../types/modal";

function SearchModal(props: ModalProps) {
  return (
    <BaseModal {...props} title="Search">
      <input
        placeholder="Search flashcards..."
        className="
          w-full
          rounded-xl
          border
          p-3
        "
      />
    </BaseModal>
  );
}

export default SearchModal;
