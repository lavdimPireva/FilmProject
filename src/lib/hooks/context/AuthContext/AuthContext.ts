import React, { useContext } from "react";
import { Role } from "../../../../components/ProtectedRoute/RouteWrapper";

export interface AuthContextField {
  user: string | null;
  userRole: Role;
  onLogout: () => void;
  onLogin: (username: string) => void;
}

export const AuthContext = React.createContext<AuthContextField>({
  user: null,
  userRole: "user",
  onLogin: () => {},
  onLogout: () => {},
});

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuthContext was used outside of its Provider");
  }

  return context;
};
