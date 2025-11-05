import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import { forgotPasswordThunk } from "../../features/auth/authThunk";
import { forgotPassValidationSchema } from "../../validations/validation";
import { useNavigate } from "react-router-dom";


export default function ForgotPassword(){

    const {loading} = useSelector();
    const navigate= useNavigate();
    const dispatch= useDispatch();
    const formik= useFormik({
        initialValues: {
          email:""
        },
        validationSchema: forgotPassValidationSchema,
        onSubmit: (values, resetForm) => {
            dispatch(forgotPasswordThunk(values))
            resetForm();
        }
    })
    return(
    <div>
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
        <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-300"
            >
              {loading ? "Sending..." : "Send Reset Link"}
            </button>
          </div>
        </div>
    )
}