import React, { useContext } from "react";

export interface AuthContextField {
  user: string | null;
  onLogout: () => void;
  onLogin: (username: string) => void;
}

export const AuthContext = React.createContext<AuthContextField>({
  user: null,
  onLogin: (username: string) => {},
  onLogout: () => {},
});

export const useAuthContext = () => useContext(AuthContext);
