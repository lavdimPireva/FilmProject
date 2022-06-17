import { Button, TextField } from "@mui/material";

export const Login = () => {
  return (
    <div
      style={{
        margin: "50px",
        display: "flex",
        flexDirection: "column",
        rowGap: "20px",
        width: "400px",
      }}
    >
      <h1>Login Form</h1>
      <TextField label="Username" />
      <TextField
        type="password"
        label="Password"
        autoComplete="current-password"
      />
      <Button variant="contained">Log in</Button>
    </div>
  );
};
