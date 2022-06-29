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
import * as Yup from "yup";

import { useNavigate } from "react-router-dom";

export const Account = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      address: "",
    },
    validationSchema: Yup.object().shape({
      username: Yup.string().max(255).required("Username is required"),
      email: Yup.string()
        .email("Must be a valid email")
        .required("Email is required"),
      address: Yup.string().max(255).required("address is required"),
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
            maxWidth: 1200,
          }}
        >
          <CardHeader subheader="The information can be edited" title="Profile">
            <Divider />
          </CardHeader>
          <CardContent>
            <TextField
              label="Username"
              name="username"
              required
              variant="outlined"
              style={{ margin: 12, width: 1000 }}
              error={Boolean(formik.touched.username && formik.errors.username)}
              onChange={formik.handleChange}
              helperText={formik.touched.username && formik.errors.username}
              value={formik.values.username}
            />
            <TextField
              error={Boolean(formik.touched.email && formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              label="Email"
              type="email"
              name="email"
              required
              variant="outlined"
              style={{ margin: 12, width: 1000 }}
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <TextField
              label="Address"
              name="address"
              required
              variant="outlined"
              style={{ margin: 12, width: 1000 }}
              error={Boolean(formik.touched.address && formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
              onChange={formik.handleChange}
              value={formik.values.address}
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
