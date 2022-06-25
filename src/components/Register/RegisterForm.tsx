import { Link as linkRoute } from "react-router-dom";
import {
  Box,
  Link,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { RegisterFormik } from "../../lib/hooks/useRegisterFormik";

interface Props {
  formik: RegisterFormik;
}

export const RegisterForm = ({ formik }: Props) => {
  return (
    <>
      <Box
        component="main"
        sx={{
          marginTop: 20,
          alignItems: "center",
          display: "flex",
          flexGrow: 1,
          minHeight: "100%",
        }}
      >
        <Container maxWidth="sm">
          <Button
            component={linkRoute}
            to="/"
            startIcon={<ArrowBackIcon fontSize="small" />}
          >
            Dashboard
          </Button>
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ my: 3 }}>
              <Typography color="textPrimary" variant="h4">
                Create a new account
              </Typography>
              <Typography color="textSecondary" gutterBottom variant="body2">
                Use your email to create a new account
              </Typography>
            </Box>
            <TextField
              error={Boolean(
                formik.errors.firstName && formik.touched.firstName
              )}
              helperText={formik.touched.firstName && formik.errors.firstName}
              fullWidth
              label="First Name"
              margin="normal"
              name="firstName"
              variant="outlined"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />
            <TextField
              error={Boolean(formik.touched.lastName && formik.errors.lastName)}
              fullWidth
              helperText={formik.touched.lastName && formik.errors.lastName}
              label="Last Name"
              margin="normal"
              name="lastName"
              variant="outlined"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
            />
            <TextField
              error={Boolean(formik.touched.email && formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              fullWidth
              label="Email Address"
              margin="normal"
              name="email"
              type="email"
              variant="outlined"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            <TextField
              error={Boolean(formik.touched.password && formik.errors.password)}
              fullWidth
              helperText={formik.touched.password && formik.errors.password}
              label="Password"
              margin="normal"
              name="password"
              type="password"
              variant="outlined"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Register
              </Button>
              <Typography color="textSecondary" variant="body2">
                Have an account?{" "}
                <Button component={linkRoute} to="/login">
                  Sign In
                </Button>
              </Typography>
            </Box>
          </form>
        </Container>
      </Box>
    </>
  );
};
