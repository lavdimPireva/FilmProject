import { Box } from "@mui/material";
import { Header } from "../../layout/Header/Header";
import { Sidebar } from "../../layout/Sidebar/Sidebar";
import { useAuthContext } from "../../lib/hooks/context/AuthContext/AuthContext";

export const Home = () => {
  const { user } = useAuthContext();

  return (
    <Box
      sx={{
        display: "flex",
        flex: "1 1 auto",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Header />
      <Box
        sx={{
          display: "flex",
        }}
      >
        <div>
          <Sidebar />
        </div>
        <Box component="main" sx={{ margin: 10, textAlign: "left" }}>
          <h1>Welcome {user?.split("@")[0]!}</h1>
        </Box>
      </Box>
    </Box>
  );
};
