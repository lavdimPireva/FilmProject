import { Link as LinkRoute } from "react-router-dom";
import {
  Box,
  Button,
  Link,
  Container,
  TextField,
  Typography,
  FormControlLabel,
  Radio,
  FormLabel,
  RadioGroup,
  FormControl,
  FormGroup,
  Checkbox,
  FormHelperText,
} from "@mui/material";
import { RegisterFormik } from "../../lib/hooks/useRegisterFormik";

interface Props {
  formik: RegisterFormik;
}

export const RegisterForm = ({ formik }: Props) => {
  return (
    <>
      <Box sx={{ margin: 7 }}>
        <Container maxWidth="sm">
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
              error={Boolean(formik.touched.username && formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
              fullWidth
              label="Username"
              margin="normal"
              name="username"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.username}
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
              value={formik.values.email}
            />
            <TextField
              error={Boolean(formik.touched.age && formik.errors.age)}
              fullWidth
              helperText={formik.touched.age && formik.errors.age}
              label="Age"
              placeholder="Age"
              margin="normal"
              name="age"
              type="number"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.age}
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
            />

            <TextField
              error={Boolean(
                formik.touched.confirmPassword && formik.errors.confirmPassword
              )}
              fullWidth
              helperText={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
              label="Confirm Password"
              margin="normal"
              name="confirmPassword"
              type="password"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
            />

            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Gender
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="gender"
                value={formik.values.gender}
                onChange={formik.handleChange}
              >
                <FormControlLabel
                  value="Female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="Male"
                  control={<Radio />}
                  label="Male"
                />
              </RadioGroup>
            </FormControl>

            {Boolean(formik.touched.gender && formik.errors.gender) && (
              <FormHelperText error>{formik.errors.gender}</FormHelperText>
            )}

            <Box sx={{ marginTop: 3 }}>
              <span
                style={{
                  color: "grey",
                  fontWeight: "bold",
                }}
              >
                Preferences
              </span>
              <FormGroup>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 5,
                    margin: 2,
                  }}
                >
                  <Box>
                    <label>
                      Action
                      <Checkbox
                        name="preferences"
                        value="Action"
                        onChange={formik.handleChange}
                      />
                    </label>
                  </Box>

                  <Box>
                    <label>
                      Comedy
                      <Checkbox
                        name="preferences"
                        value="Comedy"
                        onChange={formik.handleChange}
                      />
                    </label>
                  </Box>
                  <Box>
                    <label>
                      Drama
                      <Checkbox
                        name="preferences"
                        value="Drama"
                        onChange={formik.handleChange}
                      />
                    </label>
                  </Box>
                  <Box>
                    <label>
                      Sci-Fi
                      <Checkbox
                        name="preferences"
                        value="Sci-Fi"
                        onChange={formik.handleChange}
                      />
                    </label>
                  </Box>
                  <Box>
                    <label>
                      Thriller
                      <Checkbox
                        name="preferences"
                        value={"Thriller"}
                        onChange={formik.handleChange}
                      />
                    </label>
                  </Box>
                  <Box>
                    <label>
                      Other
                      <Checkbox
                        name="preferences"
                        value="Other"
                        onChange={formik.handleChange}
                      />
                    </label>
                  </Box>
                </Box>
              </FormGroup>
            </Box>
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
                Have an account? <LinkRoute to="/login">Sign In</LinkRoute>
              </Typography>
            </Box>
          </form>
        </Container>
      </Box>
    </>
  );
};
