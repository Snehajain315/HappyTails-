import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: " https://happy-tails-1ehn.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
