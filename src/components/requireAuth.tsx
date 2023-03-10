import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { LoginTemplete } from "../screens/login_screen";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const auth = useContext(AuthContext);

  if (!auth.user) {
    return <LoginTemplete />;
  }

  return children;
};
