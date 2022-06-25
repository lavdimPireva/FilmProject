import { Box } from "@mui/material";
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../lib/hooks/context/AuthContext/AuthContext";

export const MyProfile = () => {
  const { user } = useAuthContext();

  if (user === null) {
    return <Navigate to="/login" />;
  }

  return <Box>MyProfile</Box>;
};
