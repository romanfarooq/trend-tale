import Icon from "/images/icon.png";
import GoogleIcon from "/images/google-icon.png";
import { useState, MouseEvent } from "react";
import { Link } from "react-router-dom";
import { getInitials } from "@/lib/utils";
import { useAuth } from "@/context/AuthContext";
import { AlignJustify, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigation } from "@/context/NavigationContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const { login, logout, user } = useAuth();
  const { handleNavigation } = useNavigation();

  const handleClose = (e: MouseEvent<HTMLAnchorElement>, to: string) => {
    setIsOpen(false);
    handleNavigation(e, to);
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
            onClick={() => setIsOpen(true)}
            className="mr-4 cursor-pointer md:hidden"
          />
        </SheetTrigger>
        <SheetContent
          className="flex w-full flex-col justify-between border-none bg-black p-5 pt-10 text-white"
          side="right"
        >
          <div className="flex items-center gap-2">
            <img src={Icon} alt="Icon" className="size-10" />
            <SheetTitle className="mr-9 flex-1 text-center text-3xl font-extrabold text-white sm:text-4xl">
              TrendTale
            </SheetTitle>
          </div>

          <nav className="mt-6 flex flex-col gap-y-10 text-center">
            <a
              onClick={(e) => handleClose(e, "/#home")}
              className="border-transparent text-2xl font-semibold text-white transition-colors duration-150 ease-in-out hover:bg-transparent hover:text-[#dd00ac] focus:bg-transparent focus:text-[#dd00ac] active:bg-transparent active:text-[#dd00ac]"
            >
              Home
            </a>
            <a
              onClick={(e) => handleClose(e, "/#about")}
              className="border-transparent text-2xl font-semibold text-white transition-colors duration-150 ease-in-out hover:bg-transparent hover:text-[#dd00ac] focus:bg-transparent focus:text-[#dd00ac] active:bg-transparent active:text-[#dd00ac]"
            >
              About
            </a>
            <a
              onClick={(e) => handleClose(e, "/#faqs")}
              className="border-transparent text-2xl font-semibold text-white transition-colors duration-150 ease-in-out hover:bg-transparent hover:text-[#dd00ac] focus:bg-transparent focus:text-[#dd00ac] active:bg-transparent active:text-[#dd00ac]"
            >
              FAQs
            </a>
            <Link
              to="/generate"
              onClick={() => setIsOpen(false)}
              className="border-transparent text-2xl font-semibold text-white transition-colors duration-150 ease-in-out hover:bg-transparent hover:text-[#dd00ac] focus:bg-transparent focus:text-[#dd00ac] active:bg-transparent active:text-[#dd00ac]"
            >
              Generate Video
            </Link>
          </nav>

          <div className="mx-auto mt-auto flex flex-col gap-2 p-4">
            {user ? (
              <Button
                variant="default"
                onClick={logout}
                className="bg-linear-to-r flex items-center gap-2 rounded-xl border-none from-[#dd00ac] via-[#7130c3] to-[#410093] text-xl text-white"
              >
                <LogOut className="h-5 w-5" />
                Logout
              </Button>
            ) : (
              <Button
                variant="default"
                onClick={login}
                className="bg-linear-to-r flex items-center gap-2 rounded-xl border-none from-[#dd00ac] via-[#7130c3] to-[#410093] text-xl text-white"
              >
                Sign in with Google
                <img src={GoogleIcon} alt="Google icon" className="h-5 w-5" />
              </Button>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
