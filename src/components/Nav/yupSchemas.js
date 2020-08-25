import * as yup from "yup"

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Must be a valid email address.")
    .required("Must include email address."),
  password: yup
    .string()
    .min(6, "Your password was at least 6 characters")
    .required("Password is a required field."),
});
