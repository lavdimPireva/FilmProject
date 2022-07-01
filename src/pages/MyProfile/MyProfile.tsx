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
import { Outlet } from "react-router-dom";
import { useAuthContext } from "../../lib/hooks/context/AuthContext/AuthContext";

export const MyProfile = () => {
  const { user } = useAuthContext();
  console.log("myProfile");

  return (
    <>
      <Box
        sx={{
          mx: "auto",
          my: 10,
          width: 1200,
          padding: 5,
        }}
      >
        <Card
          sx={{
            boxShadow: 5,
          }}
        >
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
              <Typography color="textPrimary" gutterBottom variant="h5">
                Lavdim Pireva
              </Typography>
              <Typography color="textSecondary" variant="body2">
                Prishtine, Kosova
              </Typography>

              <Typography color="textSecondary" variant="body2">
                GM-7
              </Typography>
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
