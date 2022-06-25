import { Box } from "@mui/material";
import React from "react";
import { RegisterForm } from "../../components/Register/RegisterForm";
import { useReigsterFormik } from "../../lib/hooks/useRegisterFormik";

export const Register = () => {
  const formik = useReigsterFormik({
    onSubmit(values, formikHelpers) {
      console.log(
        values.firstName,
        values.lastName,
        values.email,
        values.password
      );
    },
  });

  return (
    <Box>
      <RegisterForm formik={formik} />
    </Box>
  );
};
