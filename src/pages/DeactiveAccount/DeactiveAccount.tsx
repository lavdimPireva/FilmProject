import { Switch } from "@mui/material";
import { useAuthContext } from "../../lib/hooks/context/AuthContext/AuthContext";

export const DeactiveAccount = () => {
  const { onLogout } = useAuthContext();
  return (
    <div>
      <Switch checked={false} onChange={onLogout} />
    </div>
  );
};
