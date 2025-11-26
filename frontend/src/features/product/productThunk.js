import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProductService } from "../../services/productServices";

export const fetchProductThunk = createAsyncThunk(
  "product/fetchThunk",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchProductService();
      return response;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
