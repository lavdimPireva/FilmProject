import { Box, Typography } from "@mui/material";
import { Header } from "../../layout/Header/Header";
import { Sidebar } from "../../layout/Sidebar/Sidebar";
import { useAuthContext } from "../../lib/hooks/context/AuthContext/AuthContext";

export const Home = () => {
  const { user } = useAuthContext();

  return (
    <Box
      sx={{
        marginTop: 15,
        marginLeft: 40,
        // mx: "auto",
      }}
    >
      <Typography variant="h3">My Movies</Typography>
    </Box>
  );
};
