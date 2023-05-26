import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, { payload }) => {
      const newItem = payload;
      const existingItem = state.items.find((item) => item._id === newItem._id);
      if (existingItem) {
        existingItem.quantity = newItem.quantity;
      } else {
        state.items.push(newItem);
      }
    },

    removeFromCart: (state, { payload }) => {
      const itemId = payload;
      state.items = state.items.filter((item) => item.id !== itemId);
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
