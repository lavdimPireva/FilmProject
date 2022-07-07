import { useAuthContext } from "../../lib/hooks/context/AuthContext/AuthContext";
import { Role } from "../ProtectedRoute/RouteWrapper";

interface Props {
  role: Role[];
  children: React.ReactNode;
}

export const PermissionWrapper = ({ role, children }: Props) => {
  const { userRole } = useAuthContext();

  if (role.includes(userRole)) {
    return <>{children}</>;
  }

  return null;
};
