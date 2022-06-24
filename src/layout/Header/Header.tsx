import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../lib/hooks/context/AuthContext/AuthContext";

export const Header = () => {
  const { onLogout } = useAuthContext();

  return (
    <div>
      <Box
        component="header"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
          position: "fixed",
          width: "95%",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "#fff",
          borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
        }}
      >
        <div className="logo">
          <h2>Films Logo</h2>
        </div>
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
              <NavLink to="my-profile">My Profile</NavLink>
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
      </Box>
    </div>
  );
};
