import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../../features/auth/authThunk";
import { loginValidationSchema } from "../../validations/validation";
import InputField from "../../Components/inputField";
import Button from "../../Components/Button";

export default function Login() {
  const { loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: (values) => {
      dispatch(loginThunk(values)).then(() => navigate("/"));
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-100 to-emerald-100">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-8 space-y-8 border border-emerald-100">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-emerald-600 mb-2">
            Welcome Back!
          </h1>
          <p className="text-gray-500">Sign in to continue to Happy Tails</p>
        </div>

        {/* ✅ Formik Form */}
        <form className="space-y-6" onSubmit={formik.handleSubmit}>
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

          {/* Password Input */}
          <div>
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

            <div className="flex justify-end mt-1">
              <span
                onClick={() => navigate("/forgot-password")}
                className="text-xs text-teal-600 hover:text-teal-500 font-medium cursor-pointer"
              >
                Forgot password?
              </span>
            </div>
          </div>

          {/* Remember Me Checkbox */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500 cursor-pointer"
            />
            <label
              htmlFor="rememberMe"
              className="ml-2 block text-sm text-gray-700 cursor-pointer"
            >
              Remember me
            </label>
          </div>

          {/* Login Button */}
          <Button
            type="submit"
            disabled={loading}
            title={loading ? "Logging in..." : "Log In"}
          />
        </form>

        {/* Sign Up Link */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <span
              className="font-medium text-teal-600 hover:text-teal-500 cursor-pointer"
              onClick={() => navigate("/signUp")}
            >
              Sign up now
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
