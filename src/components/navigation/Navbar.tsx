import Sidebar from "./Sidebar";
import BottomNavbar from "./BottomNavbar";

import AddCardModal from "../modals/AddCardModal";
import SearchModal from "../modals/SearchModal";
import SettingModal from "../modals/SettingModal";

import { useUIStore } from "../../store/uiStore";

function Navbar() {
  const activeModal = useUIStore((state) => state.activeModal);
  const openModal = useUIStore((state) => state.openModal);
  const closeModal = useUIStore((state) => state.closeModal);

  return (
    <>
      {/* Desktop — wrapper must be sticky and full height */}
      <div className="hidden md:sticky md:top-0 md:block md:h-screen">
        <Sidebar onOpenModal={openModal} />
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <BottomNavbar onOpenModal={openModal} />
      </div>

      {/* Modals */}
      <AddCardModal open={activeModal === "add-card"} onClose={closeModal} />
      <SearchModal open={activeModal === "search"} onClose={closeModal} />
      <SettingModal open={activeModal === "settings"} onClose={closeModal} />
    </>
  );
}

export default Navbar;
