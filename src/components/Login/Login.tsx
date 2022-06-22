import { useAuthContext } from "../../lib/hooks/context/AuthContext/AuthContext";
import { useLoginFormik } from "../../lib/hooks/useLoginFormik";
import LoginForm from "../Login/LoginForm";

interface Props {
  onLogin: (username: string) => void;
}

export const Login = ({ onLogin }: Props) => {
  const context = useAuthContext();

  const formik = useLoginFormik({
    onSubmit(values, formikHelpers) {
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
