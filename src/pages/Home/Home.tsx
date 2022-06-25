import { Box } from "@mui/material";
import { Navigate } from "react-router-dom";
import { Header } from "../../layout/Header/Header";
import { Sidebar } from "../../layout/Sidebar/Sidebar";
import { useAuthContext } from "../../lib/hooks/context/AuthContext/AuthContext";
import { MyProfile } from "../MyProfile/MyProfile";

export const Home = () => {
  const { user } = useAuthContext();

  if (user === null) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <Header />
      <div>
        <Sidebar />
      </div>
      <Box sx={{ margin: 4, textAlign: "center" }}>
        <h1>Welcome {user?.split("@")[0]!}</h1>
      </Box>
    </div>
  );
};
