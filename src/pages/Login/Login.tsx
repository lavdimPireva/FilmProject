import { useAuthContext } from "../../lib/hooks/context/AuthContext/AuthContext";
import { useLoginFormik } from "../../lib/hooks/useLoginFormik";
import LoginForm from "../../components/Login/LoginForm";
import { Navigate } from "react-router-dom";

export const Login = () => {
  const { user, onLogin } = useAuthContext();

  const formik = useLoginFormik({
    onSubmit(values, formikHelpers) {
      console.log(values.username);
      onLogin(values.username);
    },
  });

  if (user !== null) {
    return <Navigate to="/" />;
  }

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
