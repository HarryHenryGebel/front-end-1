import * as yup from "yup"

export const loginSchema = yup.object().shape({
  username: yup
    .string()
    .min(2, "At least 2 characters, please")
    .required("Username is a required field."),
  password: yup
    .string()
    .min(6, "Your password was at least 6 characters")
    .required("Password is a required field."),
});

export const registrationSchema = yup.object().shape({
  imgurl: yup
    .string(),
  primaryemail: yup
    .string()
    .email("Must be a valid email address.")
    .required("Must include email address."),
  password: yup
    .string()
    .min(6, "Your password was at least 6 characters")
    .required("Password is a required field."),
  username: yup
    .string()
    .min(2, "At least 2 characters, please")
    .required("Username is a required field."),
  terms: yup
    .boolean()
    .oneOf([true], "Agreeing to kindness and Terms of Service is mandatory for any good potluck experience."),
});