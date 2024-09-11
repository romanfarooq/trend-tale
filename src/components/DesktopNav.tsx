import Icon from "@/assets/icon.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { getInitials } from "@/lib/utils";
import { LogOut } from "lucide-react";
import { Link } from "react-router-dom";

export default function DesktopNav() {
  const { login, user, logout } = useAuth();

  return (
    <div className="hidden h-16 items-center justify-between md:flex">
      <div className="ml-10 flex items-center gap-2">
        <img src={Icon} alt="Icon" className="size-10" />
        <h1 className="text-3xl font-bold">TrendTale</h1>
      </div>
      <nav className="flex flex-1 items-center justify-evenly lg:text-lg">
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
      {user ? (
        <div className="flex items-center gap-4">
          <Button
            variant="default"
            className="flex items-center gap-2 rounded-xl border-none bg-gradient-to-r from-[#dd00ac] via-[#7130c3] to-[#410093]"
            onClick={logout}
          >
            <LogOut className="h-5 w-5" />
            Logout
          </Button>
          <Avatar className="mr-10">
            <AvatarImage src={user.picture} alt="User Avatar" />
            <AvatarFallback>
              {getInitials(user.given_name, user.family_name)}
            </AvatarFallback>
          </Avatar>
        </div>
      ) : (
        <Button
          variant="default"
          className="mr-10 flex items-center gap-2 rounded-xl border-none bg-gradient-to-r from-[#dd00ac] via-[#7130c3] to-[#410093]"
          onClick={login}
        >
          Sign in with Google
          <img src="/src/assets/google-icon.png" alt="" className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
}
