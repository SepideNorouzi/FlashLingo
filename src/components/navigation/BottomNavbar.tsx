import type { ModalType } from "../../store/uiStore";

interface BottomNavbarProps {
  onOpenModal: (modal: ModalType) => void;
}

function BottomNavbar({ onOpenModal }: BottomNavbarProps) {
  return <div>BottomNavbar</div>;
}

export default BottomNavbar;
