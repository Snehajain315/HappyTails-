import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../../features/auth/authThunk";
import { loginValidationSchema } from "../../validations/validation";
import InputField from "../../Components/inputField";
import Button from "../../Components/Button";
import { GoogleLogin } from "@react-oauth/google";
import { showToast } from "../../Components/toaster";
import { axiosInstance } from "../../helpers/axiosInterceptors";
import API_PATHS from "../../services/apiEndPoints";

export default function Login() {
  const { loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // ---------------- GOOGLE LOGIN SETUP ------------------
  useEffect(() => {
    /* global google */
    if (window.google) {
      google.accounts.id.initialize({
        client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
        callback: handleGoogleLogin,
      });

      google.accounts.id.renderButton(
        document.getElementById("googleLoginBtn"),
        { theme: "outline", size: "large" }
      );
    }
  }, []);

  async function handleGoogleLogin(response) {
    try {
      const res = await axios.post(
        API_PATHS.AUTH.GOOGLE_LOGIN,
        { credential: response.credential },
        { withCredentials: true }
      );
      console.log(res.data);
      if (res.data.token) {
        localStorage.setItem("authToken", res.data.token);
        navigate("/");
      }
    } catch (err) {
      showToast({
        message: err.res.data.message || "something went wrong",
        status: "error",
      });
    }
  }

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

  const responseMessage = async (response) => {
    try {
      const res = await axiosInstance.post(
        API_PATHS.AUTH.GOOGLE_LOGIN,
        { credential: response.credential },
        { withCredentials: true }
      );

      if (res.data.token) {
        localStorage.setItem("authToken", res.data.token);

        if (res.data.user) {
          localStorage.setItem("user", JSON.stringify(res.data.user));
        }

        navigate("/");
        window.location.reload(); // important to refresh navbar UI
      }
    } catch (err) {
      showToast({
        message: "something went wrong",
        status: "error",
      });
    }
  };
  const errorMessage = (error) => {
    showToast({
      message: "Google login error",
      status: "error",
    });
  };

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
          <div className="relative mb-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Or log in with
              </span>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
          </div>
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
