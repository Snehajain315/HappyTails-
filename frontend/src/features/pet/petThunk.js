import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPetData } from "../../services/petServices";

export const fetchPetDataThunk = createAsyncThunk(
  "pets/fetchPetData",
  async (_, { returnWithValue }) => {
    try {
      const response = await fetchPetData();
      return response;
    } catch (err) {
      return returnWithValue(err.message);
    }
  }
);
