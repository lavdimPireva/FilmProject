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

export const Account = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      address: "",
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
              value={formik.values.username}
            />
            <TextField
              label="Email"
              name="email"
              required
              variant="outlined"
              style={{ margin: 12, width: 1000 }}
              error={Boolean(formik.touched.email && formik.errors.email)}
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
