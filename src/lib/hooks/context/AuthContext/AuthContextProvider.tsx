import { useState } from "react";
import { Role } from "../../../../components/ProtectedRoute/RouteWrapper";
import { AuthContext, AuthContextField } from "./AuthContext";

interface Props {
  children: React.ReactNode;
}

export const AuthContextProvider = (props: Props) => {
  const [user, setUser] = useState<string | null>(() =>
    localStorage.getItem("user")
  );

  const [userRole, setUserRole] = useState<Role>("user");

  const handleLogin = (username: string) => {
    setUser(username);
    localStorage.setItem("user", username);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const context: AuthContextField = {
    user,
    userRole,
    onLogin: handleLogin,
    onLogout: handleLogout,
  };

  return (
    <AuthContext.Provider value={context}>
      {props.children}
    </AuthContext.Provider>
  );
};
