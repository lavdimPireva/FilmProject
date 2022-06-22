import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";

export interface LoginFields {
  username: string;
  password: string;
}

interface UseLoginFormOptions {
  initialValues?: LoginFields;
  onSubmit: (
    values: LoginFields,
    formikHelpers: FormikHelpers<LoginFields>
  ) => void;
}

const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .email("Please enter a valid email")
    .required("Email is required!"),
  password: Yup.string()
    .min(6, "Your password must be minimum 6 characters long")
    .required("Password is required"),
});

export const useLoginFormik = (props: UseLoginFormOptions) => {
  return useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validateOnBlur: false,
    validateOnChange: true,
    validationSchema: LoginSchema,
    onSubmit: props.onSubmit,
  });
};

export type LoginFormik = ReturnType<typeof useLoginFormik>;
