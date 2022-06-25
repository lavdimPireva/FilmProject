import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";

export interface RegisterFields {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface UseRegisterFormOptions {
  initialValues?: RegisterFields;
  onSubmit: (
    values: RegisterFields,
    formikHelpers: FormikHelpers<RegisterFields>
  ) => void;
}

const RegisterSchema = Yup.object().shape({
  firstName: Yup.string().max(255).required("First name is required"),
  lastName: Yup.string().max(255).required("Last name is required"),
  email: Yup.string()
    .email("Must be a valid email")
    .max(255)
    .required("Email is required"),
  password: Yup.string().max(255).required("Password is required"),
});

export const useReigsterFormik = (props: UseRegisterFormOptions) => {
  return useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validateOnBlur: true,
    validateOnChange: true,
    validationSchema: RegisterSchema,
    onSubmit: props.onSubmit,
  });
};

export type RegisterFormik = ReturnType<typeof useReigsterFormik>;
