import { useState, useEffect } from "react";
import { AuthContext, UserType } from "./AuthContext";
import {
  SignOut,
  signIn,
  validateToken,
  cashoutFunction,
} from "../hooks/useApi";

export const refresh = (e: boolean) => {
  return e;
};

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<UserType | null>(null);

  const guardToken = (token: string) => {
    localStorage.setItem("authToken", token);
  };
  useEffect(() => {
    const verifyToken = async () => {
      const storageData = localStorage.getItem("authToken");
      if (storageData) {
        const data = await validateToken(storageData);
        if (data._id) {
          setUser(data);
        }
      }
    };
    verifyToken();
  }, [validateToken, refresh]);

  const signin = async (email: string, password: string) => {
    const data = await signIn(email, password);
    if (data) {
      setUser(data.token);
      guardToken(data.token);
      return true;
    }
    return false;
  };

  const makeCashout = async (
    sendEmail: string,
    email: string,
    value: string
  ) => {
    const data = await cashoutFunction(sendEmail, email, value);
    return data;
  };

  const signout = async () => {
    await SignOut();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signin, signout, makeCashout }}>
      {children}
    </AuthContext.Provider>
  );
};
