import { createSlice } from "@reduxjs/toolkit";
import { fetchProductThunk } from "./productThunk";

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProductThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Fetch product failed";
      });
  },
});

export default productSlice.reducer;
