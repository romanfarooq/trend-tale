import { Outlet } from "react-router-dom";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <>
      <header className="fixed top-0 z-30 w-full border-b border-slate-900 bg-black text-white">
        <DesktopNav />
        <MobileNav />
      </header>
      <Outlet />
    </>
  );
}
