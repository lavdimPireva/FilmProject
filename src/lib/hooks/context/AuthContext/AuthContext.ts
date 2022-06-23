import React, { useContext } from "react";

export interface AuthContextField {
  user: string | null;
  onLogout: () => void;
  onLogin: (username: string) => void;
}

export const AuthContext = React.createContext<AuthContextField>({
  user: null,
  onLogin: () => {},
  onLogout: () => {},
});

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  return context;
};
