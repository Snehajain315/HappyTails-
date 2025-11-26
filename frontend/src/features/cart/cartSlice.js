import { createSlice } from "@reduxjs/toolkit";

const getCartFromLocalStorage = () => {
  try {
    const data = localStorage.getItem("cart");
    return data ? JSON.parse(data) : [];
  } catch {
    console.log("No data found");
    return [];
  }
 
};

const saveCartToLocalStorage = (state) => {
  localStorage.setItem("cart", JSON.stringify(state));
};

const initialState = {
  items: getCartFromLocalStorage(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const items = action.payload;
      const existingItem = state.items.find((i) => i._id === items._id);
      
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...items, quantity: 1 });
      }
      saveCartToLocalStorage(state.items);
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter((i) => i._id !== action.payload);
      saveCartToLocalStorage(state.items);
    },

    increaseQty: (state, action) => {
      const product = state.items.find((i) => i._id === action.payload);
      if (product) product.quantity += 1;
      saveCartToLocalStorage(state.items);
    },

    decreaseQty: (state, action) => {
      const product = state.items.find((i) => i._id === action.payload);
      if (product.quantity > 1) {
        product.quantity -= 1;
      } else {
        state.items = state.items.filter((i) => i._id !== action.payload);
      }
      saveCartToLocalStorage(state.items);
    },

    clearCart: (state) => {
      state.items = [];
      saveCartToLocalStorage([]);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
