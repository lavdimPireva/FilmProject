import { AppBar, Box, CssBaseline, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../lib/hooks/context/AuthContext/AuthContext";

export const Header = () => {
  const { onLogout } = useAuthContext();

  return (
    <>
      <CssBaseline />
      <AppBar
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          background: "#F9FAFC",
          color: "black",
        }}
      >
        <Toolbar>
          <Typography
            sx={{
              flexGrow: 1,
            }}
          >
            Movies
          </Typography>
          <nav>
            <Box
              component="ul"
              sx={{
                display: "flex",
                listStyle: "none",
                columnGap: "30px",
              }}
            >
              <li>My Movies</li>
              <li>
                <NavLink to="myProfile">My Profile</NavLink>
              </li>
              <li
                onClick={onLogout}
                style={{
                  cursor: "pointer",
                }}
              >
                Logout
              </li>
            </Box>
          </nav>
        </Toolbar>
      </AppBar>
    </>
  );
};
