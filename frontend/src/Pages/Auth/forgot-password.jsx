import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import { forgotPasswordThunk } from "../../features/auth/authThunk";
import { forgotPassValidationSchema } from "../../validations/validation";
import InputField from "../../Components/inputField";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button";

export default function ForgotPassword() {
  const { loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: forgotPassValidationSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(forgotPasswordThunk(values));
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-100 to-emerald-100">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-8 space-y-8 border border-emerald-100">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-emerald-600 mb-2">
            Forgot Your Password?
          </h1>
          <p className="text-gray-500">
            Enter your email to receive a password reset link.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={formik.handleSubmit} className="space-y-6">
          {/* Email Input */}
          <InputField
            type="email"
            id="email"
            name="email"
            label="Email Address"
            placeholder="Enter a valid email address"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.email}
            touched={formik.touched.email}
          />

          {/* Submit Button */}
          <Button 
            type="submit"
            disabled={loading}
            title={loading ? "Sending..." : "Send Reset Link"}
          />
        </form>

        {/* Back to Login */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Remembered your password?{" "}
            <span
              className="font-medium text-teal-600 hover:text-teal-500 cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Back to Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
