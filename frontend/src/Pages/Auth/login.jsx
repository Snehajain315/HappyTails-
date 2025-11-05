import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../../features/auth/authThunk";
import { loginValidationSchema } from "../../validations/validation";

export default function Login() {
  const { user, loading, error } = useSelector((state) => state.auth);
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
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter a valid email address"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full px-4 py-3 rounded-lg border ${
                  formik.touched.email && formik.errors.email
                    ? "border-red-500"
                    : "border-gray-300"
                } focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-300 placeholder-gray-400`}
              />
            </div>
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
            )}
          </div>

          {/* Password Input */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <a
                href="#"
                className="text-xs text-teal-600 hover:text-teal-500 font-medium"
              >
                Forgot password?
              </a>
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full px-4 py-3 rounded-lg border ${
                  formik.touched.password && formik.errors.password
                    ? "border-red-500"
                    : "border-gray-300"
                } focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-300 placeholder-gray-400`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-400 hover:text-gray-500 focus:outline-none absolute right-3 top-4"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {formik.errors.password}
              </p>
            )}
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
          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-300"
            >
              {loading ? "Logging in..." : "Log In"}
            </button>
          </div>
        </form>

        {/* Sign Up Link */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <span
              className="font-medium text-teal-600 hover:text-teal-500 cursor-pointer"
              onClick={() => navigate("/SignUp")}
            >
              Sign up now
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
