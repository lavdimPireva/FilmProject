import { Box, Typography } from "@mui/material";
import { Header } from "../../layout/Header/Header";
import { Sidebar } from "../../layout/HomeLayout/HomeSidebar/Sidebar";
import { useAuthContext } from "../../lib/hooks/context/AuthContext/AuthContext";

export const Home = () => {
  const { user } = useAuthContext();

  return (
    <>
      <Box
        sx={{
          marginLeft: "100px",
          marginTop: "100px",
        }}
      >
        <Typography variant="h3">My Movies</Typography>
      </Box>
    </>
  );
};
