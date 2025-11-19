import React, { useState, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signupThunk } from "../../features/auth/authThunk";
import { signupValidationSchema } from "../../validations/validation";
import { generatedPassword } from "sneha-random-password-generator";
import InputField from "../../Components/inputField";
import Button from "../../Components/Button";
import API_PATHS from "../../services/apiEndPoints";
import { showToast } from "../../Components/toaster";

export default function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);
  const [profilePicture, setProfilePicture] = useState(null);
  const [showconfirmPassword, setShowConfirmPassword] = useState(false);
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
      name: "",
      age: "",
      email: "",
      password: "",
      confirmPassword: "",
      profilePicture: null,
    },
    validationSchema: signupValidationSchema,
    onSubmit: (values, { resetForm }) => {
      const form = new FormData();
      form.append("name", values.name);
      form.append("age", values.age);
      form.append("email", values.email);
      form.append("password", values.password);
      if (profilePicture) {
        form.append("profilePicture", profilePicture);
      }
      dispatch(signupThunk(form)).then(() => navigate("/login"));
    },
  });

  const handleGeneratePassword = () => {
    const pass = generatedPassword();
    formik.setFieldValue("password", pass);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-100 to-emerald-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-4xl p-8 space-y-8 border border-emerald-100">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-emerald-600 mb-2">
            Join Happy Tails
          </h2>
          <p className="text-gray-500">Create your account to get started</p>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={formik.handleSubmit}>
          {/* Name & Age */}
          <div className="grid grid-cols-2 gap-4">
            <InputField
              type="text"
              id="name"
              name="name"
              label="Full Name"
              placeholder="Enter your full name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.name}
              touched={formik.touched.name}
            />

            <InputField
              type="number"
              id="age"
              name="age"
              label="Age"
              placeholder="Enter your age"
              value={formik.values.age}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.age}
              touched={formik.touched.age}
            />
          </div>

          {/* Email */}
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

          {/* Generate Password Button */}
          <div className="flex justify-end mb-2">
            <button
              type="button"
              onClick={handleGeneratePassword}
              className="text-sm bg-gradient-to-r from-teal-500 to-emerald-600 text-white px-4 py-2 rounded-lg shadow-md hover:from-teal-600 hover:to-emerald-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            >
              Generate Password
            </button>
          </div>

          {/* Password & Confirm Password */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <InputField
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                label="Password"
                placeholder="Enter password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.password}
                touched={formik.touched.password}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-400 hover:text-indigo-600 focus:outline-none absolute right-3 top-10"
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
            </div>

            {formik.values.password &&
              formik.values.confirmPassword &&
              formik.values.password !== formik.values.confirmPassword && (
                <p className="mt-1 text-sm text-red-600 font-medium col-span-2">
                  Passwords do not match
                </p>
              )}
          </div>

          {/* Profile Picture */}
          <div>
            <label
              htmlFor="profilePicture"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Profile Picture
            </label>

            <div className="mt-1 flex items-center justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-teal-400 transition-colors duration-300">
              <div className="space-y-2 text-center">
                {profilePicture ? (
                  <div>
                    <p className="text-sm text-gray-700 font-medium">
                      {profilePicture.name}
                    </p>
                    <button
                      type="button"
                      onClick={() => setProfilePicture(null)}
                      className="mt-1 text-xs text-red-500 hover:text-red-600 font-medium"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <>
                    <label
                      htmlFor="profilePicture"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-teal-600 hover:text-teal-500 focus-within:outline-none"
                    >
                      <span>Upload a file</span>
                      <input
                        id="profilePicture"
                        name="profilePicture"
                        type="file"
                        className="sr-only"
                        accept="image/*"
                        onChange={(e) =>{
                           setProfilePicture(e.target.files[0])
                           formik.setFieldValue("profilePicture", e.target.files[0])
                          }}
                      />
                    </label>
                    <p className="text-sm text-gray-500">
                      or drag and drop your image here
                    </p>
                    <p className="text-xs text-gray-400">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>

          <Button
            type="submit"
            title={loading ? "Creating..." : "Create Account"}
            disabled={loading}
          />
        </form>

        {/* Social Login Section */}
        <div className="grid grid-cols-2 gap-8">
          <div className="flex items-center justify-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <span
                className="font-medium text-teal-600 hover:text-teal-500 cursor-pointer"
                onClick={() => navigate("/login")}
              >
                Log in
              </span>
            </p>
          </div>

          <div>
            <div className="relative mb-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Or sign up with
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {/* GOOGLE LOGIN BUTTON */}
              {/* <button
                type="button"
                onClick={() => google.accounts.id.prompt()}
                className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Google
              </button> */}

              <div id="googleLoginBtn"></div>

              {/* <button className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                Facebook
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
