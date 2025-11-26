import { createSlice } from "@reduxjs/toolkit";

const getWishlistFromLocalStorage = () => {
  try {
    const wishlistData = localStorage.getItem("wishlist");
    return wishlistData ? JSON.parse(wishlistData) : [];
  } catch {
    console.log("No Data Found");
    return [];
  }
};

const saveWishlistToLocalStorage = (state) => {
  localStorage.setItem("wishlist", JSON.stringify(state));
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlistItems: getWishlistFromLocalStorage(),
  },
  reducers: {
    addToWishlist: (state, action) => {
      const items = action.payload;
      const existingItem= state.wishlistItems.find((i)=> i._id === items._id)
      if(existingItem){
         state.wishlistItems = state.wishlistItems.filter((i) => i._id !== items._id);
      }
      else{
        state.wishlistItems.push(items);
      }
      saveWishlistToLocalStorage(state.wishlistItems);
    },

    removeFromWishlist: (state, action) => {
      state.wishlistItems = state.wishlistItems.filter(
        (i) => i._id !== action.payload
      );
      saveWishlistToLocalStorage(state.wishlistItems);
    },

    clearWishlist: (state) => {
      state.wishlistItems = [];
      saveWishlistToLocalStorage([]);
    },
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } =
  wishlistSlice.actions;
export default wishlistSlice.reducer;
