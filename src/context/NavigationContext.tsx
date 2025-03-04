import { createContext, useContext, ReactNode, MouseEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type NavigationHandler = {
  handleNavigation: (e: MouseEvent<HTMLAnchorElement>, to: string) => void;
};

type NavigationContextType = NavigationHandler & {
  scrollToElement: (id: string) => void;
};

const NavigationContext = createContext<NavigationContextType | null>(null);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavigation = (e: MouseEvent<HTMLAnchorElement>, to: string) => {
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

  return (
    <NavigationContext.Provider value={{ handleNavigation, scrollToElement }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
}