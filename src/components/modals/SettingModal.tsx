import BaseModal from "./BaseModal";
import type { ModalProps } from "../../types/modal";

function SettingModal(props: ModalProps) {
  return (
    <BaseModal {...props} title="Settings">
      <p>
        Settings has no functionality yet. if you are looking for a dark mode
        you are in the wrong place and that feature will not be stepping into my
        app . XoXo
      </p>
    </BaseModal>
  );
}

export default SettingModal;
