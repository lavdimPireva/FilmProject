import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { LoginFormik } from "../../lib/hooks/useLoginFormik";

interface Props {
  formik: LoginFormik;
}

export const LoginForm = ({ formik }: Props) => {
  return (
    <>
      <Container
        maxWidth="sm"
        sx={{
          marginTop: 20,
        }}
      >
        <Box
          component="main"
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            minHeight: "100%",
            gap: 3,
          }}
        >
          <h1>Login Form</h1>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              rowGap: "20px",
              width: "400px",
            }}
            onSubmit={formik.handleSubmit}
          >
            <div style={{ width: "100%" }}>
              <TextField
                error={!!formik.values.username}
                sx={{ width: "100%" }}
                type="text"
                label="Username"
                name="username"
                onChange={formik.handleChange}
                value={formik.values.username}
              />

              {formik.errors.username && formik.touched.username && (
                <Box sx={{ color: "red", fontSize: "12px" }}>
                  {formik.errors.username}
                </Box>
              )}
            </div>
            <div style={{ width: "100%" }}>
              <TextField
                type="password"
                label="Password"
                name="password"
                sx={{ width: "100%" }}
                error={!!formik.values.password}
                onChange={formik.handleChange}
                value={formik.values.password}
              />

              {formik.errors.password && formik.touched.password && (
                <Box sx={{ color: "red", fontSize: "12px" }}>
                  {formik.errors.password}
                </Box>
              )}
            </div>
            <Button type="submit" variant="contained">
              Log in
            </Button>

            <Button component={Link} to="/register" variant="contained">
              Create new account
            </Button>
          </form>
        </Box>
      </Container>
    </>
  );
};
