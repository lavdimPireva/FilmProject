import { Box } from "@mui/material";
import { Header } from "../../layout/Header/Header";
import { Sidebar } from "../../layout/Sidebar/Sidebar";
import { useAuthContext } from "../../lib/hooks/context/AuthContext/AuthContext";

export const Home = () => {
  const { user } = useAuthContext();

  return <h2 style={{ marginTop: 150 }}>Hello bir</h2>;
};
