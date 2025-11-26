import { showToast } from "../Components/toaster";
import { axiosInstance } from "../helpers/axiosInterceptors";
import API_PATHS from "./apiEndPoints";

export const fetchProductService = async () => {
  try {
    const response = await axiosInstance.get(API_PATHS.PRODUCT.ALL_PRODUCTS, {
      withCredentials: true,
    });
    return response.data;
  } catch (err) {
    showToast({
      message: err.response.data.message || "Products fetch failed",
      status: "error",
    });
  }
};
