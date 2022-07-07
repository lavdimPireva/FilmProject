import { useAuthContext } from "../../lib/hooks/context/AuthContext/AuthContext";
import { PERMISSIONS } from "./permission-maps";

interface Props {
  children: JSX.Element;
  scopes: string[];
}

const hasPermission = (permissions: string[], scopes: string[]) => {
  const scopesMap: { [key: string]: boolean } = {};

  scopes.forEach((scope) => {
    scopesMap[scope] = true;
  });

  return permissions.some((permission) => scopesMap[permission]);
};

export const AccessControl = ({ children, scopes }: Props) => {
  const { userRole } = useAuthContext();

  const permissions = PERMISSIONS[userRole];

  const permissionGranted = hasPermission(permissions, scopes);

  if (!permissionGranted) {
    return null;
  }

  return children;
};
