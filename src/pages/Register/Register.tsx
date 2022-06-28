import { Box } from "@mui/material";
import { Navigate } from "react-router-dom";
import { RegisterForm } from "../../components/Register/RegisterForm";
import { useAuthContext } from "../../lib/hooks/context/AuthContext/AuthContext";
import { useReigsterFormik } from "../../lib/hooks/useRegisterFormik";
export const Register = () => {
  const { user } = useAuthContext();

  const formik = useReigsterFormik({
    onSubmit(values, formikHelpers) {
      console.info(values);
    },
  });

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <Box>
      <RegisterForm formik={formik} />
    </Box>
  );
};
