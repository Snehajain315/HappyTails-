import { axiosInstance } from "../helpers/axiosInterceptors";
import API_PATHS from "./apiEndPoints";

export const login = async (body) => {
  try {
    const response = await axiosInstance.post(`${API_PATHS.AUTH.LOGIN}`, body);
    localStorage.setItem("authToken", response.data.token);
    // localStorage.setItem('role', response.data.role)
    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
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
    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
  }
};
