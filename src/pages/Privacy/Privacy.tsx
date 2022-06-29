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

export const Privacy = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      password: "",
      newPassword: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      console.log(values);
      navigate("/");
    },
  });

  return (
    <Box sx={{}}>
      <form onSubmit={formik.handleSubmit}>
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
              type="password"
              label="Password"
              name="password"
              required
              variant="outlined"
              style={{ margin: 12, width: 1000 }}
              error={Boolean(formik.touched.password && formik.errors.password)}
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            <TextField
              type="password"
              label="New Password"
              name="newPassword"
              required
              variant="outlined"
              style={{ margin: 12, width: 1000 }}
              error={Boolean(
                formik.touched.newPassword && formik.errors.newPassword
              )}
              value={formik.values.newPassword}
              onChange={formik.handleChange}
            />
            <TextField
              type="password"
              label="Confirm Password"
              name="confirmPassword"
              required
              variant="outlined"
              style={{ margin: 12, width: 1000 }}
              error={Boolean(
                formik.touched.confirmPassword && formik.errors.confirmPassword
              )}
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
