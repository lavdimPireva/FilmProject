import { Box, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <Box
        sx={{
          marginLeft: "100px",
          marginTop: "100px",
        }}
      >
        <Typography variant="h3">Welcome to Movie Project</Typography>
      </Box>
    </>
  );
};
