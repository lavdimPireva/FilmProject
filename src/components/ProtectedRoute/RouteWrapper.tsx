import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../lib/hooks/context/AuthContext/AuthContext";

interface Props {
  children: JSX.Element;
  routeType: "protected" | "guest";
}

export const RouteWrapper = ({ children, routeType }: Props) => {
  const { user } = useAuthContext();

  if (!user && routeType === "protected") {
    return <Navigate to="/login" />;
  }

  if (user && routeType === "guest") {
    return <Navigate to="/" />;
  }

  return children;
};
