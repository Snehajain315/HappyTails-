import * as Yup from "yup";

export const loginValidationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Atleast 6 characters")
    .required("Password is required"),
});

export const signupValidationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  age: Yup.number().required("Age is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Atleast 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string().required("Confirm password is required"),
});

export const forgotPassValidationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
});

export const resetPassValidationSchema = Yup.object({
  password: Yup.string()
    .min(6, "Atleast 6 characters")
    .required("Password is required"),
});
