import { showToast } from "../Components/toaster";
import { axiosInstance } from "../helpers/axiosInterceptors";
import API_PATHS from "./apiEndPoints";

export const login = async (body) => {
  try {
    const response = await axiosInstance.post(`${API_PATHS.AUTH.LOGIN}`, body);
    localStorage.setItem("authToken", response.data.token);
    localStorage.setItem("role", response.data.user.role);
    showToast({
      message: `Welcome Back ${response.data.user.name}😄`,
      status: "success",
    });
    return response.data;
  } catch (err) {
    showToast({
      message: err.response.data.message || "Login failed",
    });
  }
};

export const signup = async (formData) => {
  try {
    const response = await axiosInstance.post(
      `${API_PATHS.AUTH.SIGNUP}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    showToast({
      message: "Account created successfully",
      status: "success",
    });
    return response.data;
  } catch (err) {
    showToast({
      message: err.response.data.message || "Sign Up failed",
      status: "error",
    });
  }
};
