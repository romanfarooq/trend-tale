import axios from "@/api/axiosInstance";
import { useCookies } from "react-cookie";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import {
  useState,
  useEffect,
  useContext,
  ReactNode,
  createContext,
} from "react";

type AuthContextType = {
  user: User | null;
  token: string | null;
  login: () => void;
  logout: () => void;
};

type User = {
  sub: string;
  name: string;
  given_name: string;
  family_name: string;
  picture: string;
  email: string;
  email_verified: boolean;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [cookies, setCookie, removeCookie] = useCookies([
    "trendtale_user",
    "trendtale_token",
  ]);

  useEffect(() => {
    const storedUser = cookies.trendtale_user;
    const storedToken = cookies.trendtale_token;

    if (storedUser && storedToken) {
      setUser(storedUser);
      setToken(storedToken);
    }
  }, [cookies]);

  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const { access_token } = response;

        setToken(access_token);
        
        const tokenExpiryDate = new Date(new Date().getTime() + 60 * 60 * 1000); // 1 hour

        setCookie("trendtale_token", access_token, {
          expires: tokenExpiryDate,
        });

        const { data } = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: { Authorization: `Bearer ${access_token}` },
          },
        );

        setUser(data);

        setCookie("trendtale_user", JSON.stringify(data), {
          expires: tokenExpiryDate,
        });
      } catch (error) {
        console.error("Login failed:", error);
      }
    },
    onError: (error) => {
      console.error("Google login failed:", error);
    },
    scope: "https://www.googleapis.com/auth/youtube.upload",
  });

  const logout = () => {
    googleLogout();
    setUser(null);
    setToken(null);
    removeCookie("trendtale_user");
    removeCookie("trendtale_token");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
