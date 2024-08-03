"use client";

import { createContext, useState, useEffect, ReactNode } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

// Define the type for the Auth context
export type AuthContextType = {
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => void;
  teamRegister: boolean;
  setTeamRegister: (value: boolean) => void;
};

// Create context with a default value of null
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [teamRegister, setTeamRegister] = useState<boolean>(false); // Initialize as boolean
  const router = useRouter();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(JSON.parse(storedToken));
    } else {
      setToken(null);
    }
  }, []);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Get the token from local storage
        const tokenString = localStorage.getItem("token");
        if (!tokenString) {
          router.push("/auth/login")
        }

        // Parse the token if it is a JSON string
        const token = JSON.parse(tokenString);

        // Make the API request with the token in the headers
        const response = await axios.get('https://isrc-backend.onrender.com/user-profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = response.data;

        if (response.data.user.team) {
          localStorage.setItem("registered", JSON.stringify(true));
          setTeamRegister(true); // Update context state
        }
        else{
          localStorage.setItem("registered", JSON.stringify(false));
          setTeamRegister(false)
        }
      

      } catch (error) {
        console.error(error);
    };
  }
    fetchData();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post("https://isrc-backend.onrender.com/login", {
        email,
        password,
      });
      const data = response.data;
      setToken(data.token);
      localStorage.setItem("token", JSON.stringify(data.token));
      router.push("/"); // Redirect to home or dashboard on successful login
    } catch (error) {
      console.error("Login error:", error);
      // Optionally handle error
    }
  };

  const register = async (email: string, password: string) => {
    try {
      const response = await axios.post("https://isrc-backend.onrender.com/register", {
        email,
        password,
      });
      const data = response.data;
      console.log(data);
      setToken(data.token);
      localStorage.setItem("token", JSON.stringify(data.token));
      localStorage.setItem("registered", JSON.stringify(true)); // Store registration status
      router.push("/"); // Redirect to home or dashboard on successful registration
    } catch (error) {
      console.error("Registration error:", error);
      // Optionally handle error
    }
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("registered"); // Clear registration status
    router.push("/login"); // Redirect to login
  };

  return (
    <AuthContext.Provider value={{ token, login, register, teamRegister, setTeamRegister, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
