import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

export const Privacy = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      password: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object().shape({
      password: Yup.string().max(255).required("Password is required"),
      newPassword: Yup.string().max(255).required("Password is required"),
      confirmPassword: Yup.string().oneOf(
        [Yup.ref("newPassword"), null],
        "Password must match!"
      ),
    }),
    validateOnBlur: false,
    validateOnChange: true,
    onSubmit: (values) => {
      console.log(values);
      navigate("/");
    },
  });

  return (
    <Box sx={{}}>
      <form onSubmit={formik.handleSubmit} autoComplete="off" noValidate>
        <Card
          sx={{
            marginTop: 5,
            boxShadow: 5,
          }}
        >
          <CardHeader subheader="The information can be edited" title="Privacy">
            <Divider />
          </CardHeader>
          <CardContent>
            <TextField
              error={Boolean(formik.touched.password && formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              type="password"
              label="Current Password"
              name="password"
              required
              variant="outlined"
              style={{ margin: 12, width: 1000 }}
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            <TextField
              error={Boolean(
                formik.touched.newPassword && formik.errors.newPassword
              )}
              helperText={
                formik.touched.newPassword && formik.errors.newPassword
              }
              type="password"
              label="New Password"
              name="newPassword"
              required
              variant="outlined"
              style={{ margin: 12, width: 1000 }}
              value={formik.values.newPassword}
              onChange={formik.handleChange}
            />
            <TextField
              error={Boolean(
                formik.touched.confirmPassword && formik.errors.confirmPassword
              )}
              helperText={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
              type="password"
              label="Confirm Password"
              name="confirmPassword"
              required
              variant="outlined"
              style={{ margin: 12, width: 1000 }}
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
            />
          </CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              p: 2,
            }}
          >
            <Button type="submit" color="primary" variant="contained">
              Save details
            </Button>
          </Box>
        </Card>
      </form>
    </Box>
  );
};
