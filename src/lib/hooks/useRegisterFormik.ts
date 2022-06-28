import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";

export interface RegisterFields {
  username: string;
  email: string;
  age: string;
  password: string;
  confirmPassword: string;
  preferences: string[];
  gender: string;
}

interface UseRegisterFormOptions {
  initialValues?: RegisterFields;

  onSubmit: (
    values: RegisterFields,
    formikHelpers: FormikHelpers<RegisterFields>
  ) => void;
}

const RegisterSchema = Yup.object().shape({
  username: Yup.string().max(255).required("Username is required"),
  email: Yup.string()
    .email("Must be a valid email")
    .max(255)
    .required("Email is required"),
  age: Yup.number().min(18).positive().integer().required("Age is required"),
  password: Yup.string().max(255).required("Password is required"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Password must match!"
  ),
  gender: Yup.string()
    .required()
    .oneOf(["Male", "Female"], "Gender is Required"),
  preferences: Yup.array().optional(),
});

export const useReigsterFormik = (props: UseRegisterFormOptions) => {
  return useFormik<RegisterFields>({
    initialValues: {
      username: "",
      email: "",
      password: "",
      age: "",
      confirmPassword: "",
      gender: "",
      preferences: [],
    },
    validateOnBlur: false,
    validateOnChange: true,
    validationSchema: RegisterSchema,
    onSubmit: props.onSubmit,
  });
};

export type RegisterFormik = ReturnType<typeof useReigsterFormik>;
