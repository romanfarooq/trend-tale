import Icon from "@/assets/icon.png";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import { Link } from "react-router-dom";

export default function DesktopNav() {
  return (
    <div className="hidden h-16 flex-1 items-center justify-between md:flex">
      <div className="ml-10 flex items-center gap-2">
        <img src={Icon} alt="Icon" className="size-10" />
        <h1 className="text-3xl font-bold">TrendTale</h1>
      </div>
      <nav className="flex flex-1 items-center justify-evenly text-lg">
        <Link
          to="/#home"
          className="border-transparent text-white transition-colors duration-150 ease-in-out hover:bg-transparent hover:text-[#dd00ac] focus:bg-transparent focus:text-[#dd00ac] active:bg-transparent active:text-[#dd00ac]"
        >
          Home
        </Link>
        <Link
          to="/#about"
          className="border-transparent text-white transition-colors duration-150 ease-in-out hover:bg-transparent hover:text-[#dd00ac] focus:bg-transparent focus:text-[#dd00ac] active:bg-transparent active:text-[#dd00ac]"
        >
          About
        </Link>
        <Link
          to="/#faqs"
          className="border-transparent text-white transition-colors duration-150 ease-in-out hover:bg-transparent hover:text-[#dd00ac] focus:bg-transparent focus:text-[#dd00ac] active:bg-transparent active:text-[#dd00ac]"
        >
          FAQs
        </Link>
        <Link
          to="/generate"
          className="border-transparent text-white transition-colors duration-150 ease-in-out hover:bg-transparent hover:text-[#dd00ac] focus:bg-transparent focus:text-[#dd00ac] active:bg-transparent active:text-[#dd00ac]"
        >
          Generate Video
        </Link>
      </nav>
      <Button
        variant="default"
        className="mr-10 flex items-center gap-2 border-none bg-gradient-to-r from-[#dd00ac] via-[#7130c3] to-[#410093]"
      >
        <LogIn className="h-5 w-5" />
        Sign in with Google
      </Button>
    </div>
  );
}
