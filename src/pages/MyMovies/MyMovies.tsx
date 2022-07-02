import { Box, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

export const MyMovies = () => {
  return (
    <>
      <Box
        sx={{
          marginLeft: "100px",
          marginTop: "100px",
        }}
      >
        <Typography variant="h3">My Movies</Typography>
        <Outlet />
      </Box>
    </>
  );
};
