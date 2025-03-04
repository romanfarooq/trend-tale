import { Outlet } from "react-router-dom";
import MobileNav from "@/components/MobileNav";
import DesktopNav from "@/components/DesktopNav";

export default function Header() {
  return (
    <>
      <header className="fixed top-0 z-30 w-full border-b border-slate-900 bg-black text-white">
        <MobileNav />
        <DesktopNav />
      </header>
      <Outlet />
    </>
  );
}
