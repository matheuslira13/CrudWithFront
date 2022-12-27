import { createContext, useState, useEffect } from "react";

export type UserType = {
  id: number;
  name: string;
  email: string;
  balance: number;
  password?: string;
  facebook?: string;
  github?: string;
  linkedin?: string;
  historic?: [
    {
      type: string;
      date: string;
      hours: string;
      value: string;
    }
  ];
};

export type AuthContextType = {
  user: UserType | null;
  signin: (email: string, password: string) => Promise<boolean>;
  signout: () => void;
};

export const AuthContext = createContext<AuthContextType>(null!);
