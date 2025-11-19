import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://happytails-wkk8.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
    "Content-Type": "multipart/form-data"
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
