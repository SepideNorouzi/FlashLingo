import { Sidebar } from "lucide-react";
import BottomNavbar from "./BottomNavbar";

function Navbar() {
  const isDesktop = window.innerWidth >= 768;

  if (isDesktop) {
    return <Sidebar />;
  }

  return <BottomNavbar />;
}

export default Navbar;
