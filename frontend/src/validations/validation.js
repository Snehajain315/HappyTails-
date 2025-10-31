import * as Yup from 'yup';

export const loginValidationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Atleast 6 characters").required("Password is required")
})