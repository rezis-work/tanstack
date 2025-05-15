import { useState } from "react";

interface User {
  id?: string;
  name: string;
  email: string;
  password: string;
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);

  const register = (email: string, password: string, name: string) => {
    setUser({ id: crypto.randomUUID(), name, email, password });
    localStorage.setItem("user", JSON.stringify(user));
  };

  const login = (name: string, email: string, password: string) => {
    setUser({ id: crypto.randomUUID(), name, email, password });
    localStorage.setItem("user", JSON.stringify(user));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const isAuthenticated = () => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
    return user !== null;
  };
  console.log(user);
  return { user, register, login, logout, isAuthenticated };
};

export type AuthContext = ReturnType<typeof useAuth>;
