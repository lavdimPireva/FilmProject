import { useAuthContext } from "../../lib/hooks/context/AuthContext/AuthContext";
import { useLoginFormik } from "../../lib/hooks/useLoginFormik";
import { Navigate } from "react-router-dom";
import { LoginForm } from "../../components/Login/LoginForm";

export const Login = () => {
  const { user, onLogin } = useAuthContext();

  const formik = useLoginFormik({
    onSubmit(values, formikHelpers) {
      console.log(values.username);
      onLogin(values.username);
    },
  });

  return (
    <div
      style={{
        margin: "50px",
      }}
    >
      <LoginForm formik={formik} />
    </div>
  );
};
