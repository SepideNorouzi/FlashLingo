import BaseModal from "./BaseModal";
import type { ModalProps } from "../../types/modal";

function SettingModal(props: ModalProps) {
  return (
    <BaseModal {...props} title="Settings">
      <p>Settings go here.</p>
    </BaseModal>
  );
}

export default SettingModal;
