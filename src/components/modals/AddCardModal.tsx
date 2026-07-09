import BaseModal from "./BaseModal";
import type { ModalProps } from "../../types/modal";

function AddCardModal(props: ModalProps) {
  return (
    <BaseModal {...props} title="Add Flashcard">
      <p className="text-gray-500">Form goes here...</p>
    </BaseModal>
  );
}

export default AddCardModal;
