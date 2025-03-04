import { useEffect } from "react";
import { NavigationHandler } from "@/types/types";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import MobileNav from "@/components/MobileNav";
import DesktopNav from "@/components/DesktopNav";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavigation: NavigationHandler["handleNavigation"] = (e, to) => {
    e.preventDefault();

    if (to.includes("#")) {
      const [path, hash] = to.split("#");
      const currentPath = location.pathname;

      if ((path === "/" && currentPath === "/") || path === currentPath) {
        scrollToElement(hash);
      } else {
        navigate(path);
        setTimeout(() => scrollToElement(hash), 100);
      }
    } else {
      navigate(to);
    }
  };

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      setTimeout(() => scrollToElement(id), 100);
    }
  }, [location]);

  return (
    <>
      <header className="fixed top-0 z-30 w-full border-b border-slate-900 bg-black text-white">
        <MobileNav handleNavigation={handleNavigation} />
        <DesktopNav handleNavigation={handleNavigation} />
      </header>
      <Outlet />
    </>
  );
}
