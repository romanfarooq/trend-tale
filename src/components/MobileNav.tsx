import Icon from "@/assets/icon.png";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify, LogIn } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <div className="flex h-16 flex-1 items-center justify-between md:hidden">
      <div className="ml-10 flex items-center gap-2">
        <img src={Icon} alt="Icon" className="size-10" />
        <h1 className="text-3xl font-bold">TrendTale</h1>
      </div>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <AlignJustify
            className="mr-10 cursor-pointer md:hidden"
            onClick={handleOpen}
          />
        </SheetTrigger>
        <SheetContent
          className="w-full border-none bg-black text-white"
          side="right"
        >
          <div className="flex items-center gap-2">
            <img src={Icon} alt="Icon" className="size-10" />
            <SheetTitle className="mr-9 flex-1 text-center text-3xl font-extrabold text-white sm:text-4xl">
              TrendTale
            </SheetTitle>
          </div>

          <nav className="mt-6 flex flex-col gap-y-16 text-center">
            <Link
              to="/#home"
              className="mt-10 border-transparent text-2xl font-semibold text-white transition-colors duration-150 ease-in-out hover:bg-transparent hover:text-[#dd00ac] focus:bg-transparent focus:text-[#dd00ac] active:bg-transparent active:text-[#dd00ac]"
              onClick={handleClose}
            >
              Home
            </Link>
            <Link
              to="/#about"
              className="border-transparent text-2xl font-semibold text-white transition-colors duration-150 ease-in-out hover:bg-transparent hover:text-[#dd00ac] focus:bg-transparent focus:text-[#dd00ac] active:bg-transparent active:text-[#dd00ac]"
              onClick={handleClose}
            >
              About
            </Link>
            <Link
              to="/#faqs"
              className="border-transparent text-2xl font-semibold text-white transition-colors duration-150 ease-in-out hover:bg-transparent hover:text-[#dd00ac] focus:bg-transparent focus:text-[#dd00ac] active:bg-transparent active:text-[#dd00ac]"
              onClick={handleClose}
            >
              FAQs
            </Link>
            <Link
              to="/generate"
              className="border-transparent text-2xl font-semibold text-white transition-colors duration-150 ease-in-out hover:bg-transparent hover:text-[#dd00ac] focus:bg-transparent focus:text-[#dd00ac] active:bg-transparent active:text-[#dd00ac]"
              onClick={handleClose}
            >
              Generate Video
            </Link>
            <Button
              variant="default"
              className="flex items-center gap-2 border-none bg-gradient-to-r from-[#dd00ac] via-[#7130c3] to-[#410093] text-white"
            >
              <LogIn className="h-5 w-5" />
              Sign in with Google
            </Button>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
