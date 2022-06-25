import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../lib/hooks/context/AuthContext/AuthContext";

interface Props {
  children: JSX.Element;
}

export const ProtectedRoute = ({ children }: Props) => {
  const { user } = useAuthContext();

  if (!user) {
    return (
      <>
        <Navigate to="/login" />
      </>
    );
  }

  return children;
};
