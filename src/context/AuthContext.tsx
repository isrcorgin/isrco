"use client";

import { createContext, useState, useEffect, ReactNode } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

// Define a specific type for the user object based on your application's needs
type User = {
  uid: string;
  email?: string; // Optional property, adjust based on actual user object
  name?: string; // Optional property, adjust based on actual user object
  [key: string]: any; // Additional properties if needed
};

export type AuthContextType = {
  user: User | null;
  token: string | null;
  uid: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

// Create context with a default value of null
const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [uid, setUid] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUid = localStorage.getItem("uid");
    if (storedToken && storedUid) {
      setToken(JSON.parse(storedToken));
      setUid(JSON.parse(storedUid));
      // Optionally fetch user details from backend using the token if needed
      // fetchUserDetails(storedToken);
    } else {
      setToken(null);
      setUid(null);
    }
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post("https://isrc-backend.onrender.com/login", {
        email,
        password,
      });
      const data = response.data;
      setUser(data.user);
      setToken(data.idToken);
      setUid(data.user.uid);
      localStorage.setItem("token", JSON.stringify(data.idToken));
      localStorage.setItem("uid", JSON.stringify(data.user.uid));
    } catch (error) {
      console.error(
        "Login error:"
      );
    }
  };

  const register = async (email: string, password: string) => {
    try {
      const response = await axios.post("https://isrc-backend.onrender.com/register", {
        email,
        password,
      });
      const data = response.data;
      setUser(data.user);
      setToken(data.idToken);
      setUid(data.user.uid);
      localStorage.setItem("token", JSON.stringify(data.idToken));
      localStorage.setItem("uid", JSON.stringify(data.user.uid));
    } catch (error) {
      console.error(
        "Registration error:"
      );
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    setUid(null);
    localStorage.removeItem("token");
    localStorage.removeItem("uid");
    router.push("/login"); // Redirect to login
  };

  return (
    <AuthContext.Provider value={{ user, token, uid, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
