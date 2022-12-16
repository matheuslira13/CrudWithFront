import { createContext, useState, useEffect } from "react";

export type UserType = {
  id: number;
  name: string;
  email: string;
  balance: number;
  password?: string;
};

export type AuthContextType = {
  user: UserType | null;
  signin: (email: string, password: string) => Promise<boolean>;
  signout: () => void;
};

export const AuthContext = createContext<AuthContextType>(null!);
