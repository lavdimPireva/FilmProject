import { Box } from "@mui/material";
import { RegisterForm } from "../../components/Register/RegisterForm";
import { useReigsterFormik } from "../../lib/hooks/useRegisterFormik";

export const Register = () => {
  const formik = useReigsterFormik({
    onSubmit(values, formikHelpers) {
      console.log("Pershendetje!");
      console.log(
        values.username,
        values.email,
        values.age,
        values.password,
        values.confirmPassword,
        values.gender,
        values.preferences
      );
    },
  });

  return (
    <Box>
      <RegisterForm formik={formik} />
    </Box>
  );
};
