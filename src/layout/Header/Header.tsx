import { AppBar, Box, CssBaseline, Toolbar, Typography } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../lib/hooks/context/AuthContext/AuthContext";

export const Header = () => {
  const { onLogout } = useAuthContext();
  const navigate = useNavigate();

  return (
    <>
      <CssBaseline />
      <AppBar
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          background: "#F9FAFC",
          color: "white",
          backgroundColor: "#1b1b1b",
        }}
      >
        <Toolbar>
          <Box
            sx={{
              flexGrow: 1,
            }}
          >
            <img
              src="https://cdn-gce.allmovie.com/images/allmovie_wordmark.png"
              style={{
                width: "80px",
                cursor: "pointer",
              }}
              onClick={() => navigate("/")}
            />
          </Box>
          <nav>
            <Box
              component="ul"
              sx={{
                display: "flex",
                listStyleType: "none",
                columnGap: "30px",
                fontWeight: "bold",
              }}
            >
              <li>My Movies</li>
              <li>
                <NavLink
                  to="myProfile"
                  style={() => ({
                    color: "white",
                    textDecoration: "none",
                  })}
                >
                  My Profile
                </NavLink>
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
