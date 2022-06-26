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

  if (context === undefined) {
    throw new Error("useAuthContext was used outside of its Provider");
  }

  return context;
};
