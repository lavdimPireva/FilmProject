import { Box, Button, Switch } from "@mui/material";
import { useState } from "react";
import { useAuthContext } from "../../lib/hooks/context/AuthContext/AuthContext";

export const DeactiveAccount = () => {
  const [checked, setChecket] = useState(false);

  const { onLogout } = useAuthContext();

  const handleChange = () => {
    setChecket((prev) => !prev);
  };

  const handleClick = () => {
    if (checked) {
      onLogout();
    }
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          p: 2,
          marginTop: 10,
        }}
      >
        <Switch checked={checked} onChange={handleChange} />
        <Button onClick={handleClick} color="primary" variant="contained">
          Save details
        </Button>
      </Box>
    </div>
  );
};
