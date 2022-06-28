import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../lib/hooks/context/AuthContext/AuthContext";

export const MyProfile = () => {
  const { user } = useAuthContext();

  if (user === null) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      {/* <Typography sx={{ mx: "60", my: 15 }}>Account</Typography> */}
      <Box
        sx={{
          mx: "auto",
          my: 15,
          width: 1200,
          padding: 5,
        }}
      >
        <Card>
          <CardContent>
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* avatar */}
              <Avatar
                src={
                  "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
                }
                sx={{
                  height: 64,
                  mb: 2,
                  width: 64,
                }}
              />
              {/* emri */}
              <Typography color="textPrimary" gutterBottom variant="h5">
                Lavdim Pireva
              </Typography>
              {/*  qyteti shteti */}
              <Typography color="textSecondary" variant="body2">
                Prishtine, Kosova
              </Typography>

              {/* timezone */}
              <Typography color="textSecondary" variant="body2">
                GM-7
              </Typography>
              {/* divider */}
              {/* upload button */}
            </Box>
          </CardContent>
          <Divider />
          <CardActions>
            <Button color="primary" fullWidth variant="text">
              Upload picture
            </Button>
          </CardActions>
        </Card>
        <Outlet />
      </Box>
    </>
  );
};
