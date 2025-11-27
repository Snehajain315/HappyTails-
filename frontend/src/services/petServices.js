import { showToast } from "../Components/toaster";
import { axiosInstance } from "../helpers/axiosInterceptors";
import API_PATHS from "./apiEndPoints";

export const fetchPetData = async () => {
  try {
    const response = await axiosInstance.get(API_PATHS.PET.ALL_PETS);
    console.log(response.data);
    return response.data;
  } catch (error) {
    showToast({
      message: error.response.data.message,
      status: "error",
    });
  }
};
