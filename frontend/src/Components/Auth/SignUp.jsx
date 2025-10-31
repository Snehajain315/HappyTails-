import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signupThunk } from "../../features/auth/authThunk";

export default function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [profilePicture, setProfilePicture] = useState(null);
  const [showconfirmPassword, setShowConfirmPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      age: "",
      email: "",
      password: "",
      confirmPassword: "",
      profilePicture: null,
    },
    onSubmit: (values) => {
      const form = new FormData();
      form.append("name", values.name);
      form.append("age", values.age);
      form.append("email", values.email);
      form.append("password", values.password);

      if (profilePicture) {
        form.append("profilePicture", profilePicture);
      }
      dispatch(signupThunk(form));
    },
  });

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
          {/* Name and Age in a row */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your full name"
                value={formik.values.name}
                onChange={formik.handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-300 placeholder-gray-400"
              />
            </div>

            <div>
              <label
                htmlFor="age"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Age
              </label>
              <input
                type="number"
                name="age"
                id="age"
                placeholder="Enter your age"
                value={formik.values.age}
                onChange={formik.handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-300 placeholder-gray-400"
              />
            </div>
          </div>

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter a valid email address"
              value={formik.values.email}
              onChange={formik.handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-300 placeholder-gray-400"
            />
          </div>

          {/* Password and Confirm Password in a row */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Enter password"
                value={formik.values.password}
                onChange={formik.handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-300 placeholder-gray-400"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center top-6">
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-400 hover:text-indigo-600 focus:outline-none transition-colors duration-200"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="relative">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Confirm Password
              </label>
              <input
                type={showconfirmPassword ? "text" : "password"}
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm Password"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-300 placeholder-gray-400"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center top-6">
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showconfirmPassword)}
                  className="text-gray-400 hover:text-indigo-600 focus:outline-none transition-colors duration-200"
                >
                  {showconfirmPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>

            {formik.values.password &&
              formik.values.confirmPassword &&
              formik.values.password !== formik.values.confirmPassword && (
                <p className="mt-1 text-sm text-red-600 font-medium">
                  Passwords do not match
                </p>
              )}
          </div>

          {/* Profile Picture Upload */}
          <div>
            <label
              htmlFor="profilePicture"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Profile Picture
            </label>

            <div className="mt-1 flex items-center justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-teal-400 transition-colors duration-300">
              <div className="space-y-2 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

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
                        onChange={(e) => setProfilePicture(e.target.files[0])}
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

          <div className="grid grid-cols-1 gap-4 items-center">
            <div>
              <button
                type="submit"
                className="w-full py-3 px-4 bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-300"
              >
                Create Account
              </button>
            </div>
          </div>
        </form>

        {/* Login Link and Social Signup Options side by side */}
        <div className="grid grid-cols-2 gap-8">
          {/* Login Link */}
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

          {/* Social Signup Options */}
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
              <button className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                Google
              </button>
              <button className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
