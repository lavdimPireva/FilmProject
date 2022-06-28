import { Box } from "@mui/material";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../lib/hooks/context/AuthContext/AuthContext";

export const MyProfile = () => {
  const { user } = useAuthContext();

  if (user === null) {
    return <Navigate to="/login" />;
  }

  return (
    <Box
      sx={{
        margin: 50,
      }}
    >
      <h1>Hello World</h1>
    </Box>
  );
};
