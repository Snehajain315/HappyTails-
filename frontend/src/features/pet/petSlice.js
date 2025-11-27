import { createSlice } from "@reduxjs/toolkit";
import { fetchPetDataThunk } from "./petThunk";

const initialState = {
  pets: [],
  loading: false,
  error: null,
};

export const petSlice = createSlice({
  name: "pets",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPetDataThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPetDataThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.pets = action.payload;
      })
      .addCase(fetchPetDataThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Fetch Pets Data failed";
      });
  },
});

export default petSlice.reducer;
