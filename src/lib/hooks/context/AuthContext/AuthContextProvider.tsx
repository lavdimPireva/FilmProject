import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext, AuthContextField } from "./AuthContext";

interface Props {
  children: React.ReactNode;
}

export const AuthContextProvider = (props: Props) => {
  const navigate = useNavigate();

  const [user, setUser] = useState<string | null>(() =>
    localStorage.getItem("user")
  );

  const handleLogin = (username: string) => {
    setUser(username);
    localStorage.setItem("user", username);
    navigate("/");
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/login");
  };

  const context: AuthContextField = {
    user,
    onLogin: handleLogin,
    onLogout: handleLogout,
  };

  return (
    <AuthContext.Provider value={context}>
      {props.children}
    </AuthContext.Provider>
  );
};
