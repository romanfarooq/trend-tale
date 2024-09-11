import Icon from "@/assets/icon.png";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useAuth } from "@/context/AuthContext";
import { AlignJustify, LogOut } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const { login, logout, user } = useAuth();

  function handleOpen() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  const getInitials = (givenName: string, familyName: string) => {
    const firstInitial = givenName.charAt(0).toUpperCase();
    const lastInitial = familyName.charAt(0).toUpperCase();
    return `${firstInitial}${lastInitial}`;
  };

  return (
    <div className="flex h-16 items-center md:hidden">
      <div className="ml-4 flex flex-1 items-center gap-2">
        <img src={Icon} alt="Icon" className="size-10" />
        <h1 className="text-3xl font-bold">TrendTale</h1>
      </div>
      {user && (
        <Avatar className="mr-4">
          <AvatarImage src={user.picture} alt="User Avatar" />
          <AvatarFallback>
            {getInitials(user.given_name, user.family_name)}
          </AvatarFallback>
        </Avatar>
      )}

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <AlignJustify
            className="mr-4 cursor-pointer md:hidden"
            onClick={handleOpen}
          />
        </SheetTrigger>
        <SheetContent
          className="flex w-full flex-col justify-between border-none bg-black text-white"
          side="right"
        >
          <div className="flex items-center gap-2">
            <img src={Icon} alt="Icon" className="size-10" />
            <SheetTitle className="mr-9 flex-1 text-center text-3xl font-extrabold text-white sm:text-4xl">
              TrendTale
            </SheetTitle>
          </div>

          <nav className="mt-6 flex flex-col gap-y-10 text-center">
            <Link
              to="/#home"
              className="border-transparent text-2xl font-semibold text-white transition-colors duration-150 ease-in-out hover:bg-transparent hover:text-[#dd00ac] focus:bg-transparent focus:text-[#dd00ac] active:bg-transparent active:text-[#dd00ac]"
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
          </nav>

          <div className="mx-auto mt-auto flex flex-col gap-2 p-4">
            {user ? (
              <Button
                variant="default"
                className="flex items-center gap-2 rounded-xl border-none bg-gradient-to-r from-[#dd00ac] via-[#7130c3] to-[#410093] text-xl text-white"
                onClick={logout}
              >
                <LogOut className="h-5 w-5" />
                Logout
              </Button>
            ) : (
              <Button
                variant="default"
                className="flex items-center gap-2 rounded-xl border-none bg-gradient-to-r from-[#dd00ac] via-[#7130c3] to-[#410093] text-xl text-white"
                onClick={login}
              >
                Sign in with Google
                <img
                  src="/src/assets/google-icon.png"
                  alt="Google icon"
                  className="h-5 w-5"
                />
              </Button>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
