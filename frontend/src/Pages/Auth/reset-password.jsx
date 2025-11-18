import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Eye, EyeOff } from "lucide-react";
import { resetPasswordThunk } from "../../features/auth/authThunk";
import InputField from "../../Components/inputField";
import Button from "../../Components/Button";
import { useFormik } from "formik";

export default function ResetPassword() {

  const { token } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [ showPassword, setShowPassword ] = useState(false);
  const [showconfirmPassword, setShowConfirmPassword]= useState(false);

  const { loading } = useSelector((state) => state.auth);

  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(6, "Atleast 6 characters required")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      dispatch(resetPasswordThunk({token, password: values.password}));
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-100 to-emerald-100">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-8 space-y-8 border border-emerald-100">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-emerald-600 mb-2">
            Reset Your Password
          </h1>
        </div>

        {/* ✅ Formik Form */}
        <form className="space-y-6" onSubmit={formik.handleSubmit}>
          {/* Password Input */}
          <div className="space-y-6">
            <div className="relative">
              <InputField
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                label="Password"
                placeholder="Enter Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.password}
                touched={formik.touched.password}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-400 hover:text-gray-500 focus:outline-none absolute right-3 top-10"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <div className="relative">
              <InputField
                type={showconfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                label="Confirm Password"
                placeholder="Confirm password"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.confirmPassword}
                touched={formik.touched.confirmPassword}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showconfirmPassword)}
                className="text-gray-400 hover:text-indigo-600 focus:outline-none absolute right-3 top-10"
              >
                {showconfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>

              {formik.values.password &&
              formik.values.confirmPassword &&
              formik.values.password !== formik.values.confirmPassword && (
                <p className="mt-1 text-xs text-red-500 font-small col-span-2">
                  Passwords do not match
                </p>
              )}
            </div>

          </div>

          {/* Reset Password Button */}
          <Button
            type="submit"
            disabled={loading}
            title= "Reset Password"
          />
        </form>

        {/* Sign Up Link */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Remember your password?{" "}
            <span
              className="font-medium text-teal-600 hover:text-teal-500 cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Back to login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
