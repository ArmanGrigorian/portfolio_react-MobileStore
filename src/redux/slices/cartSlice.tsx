import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	items: [],
};

const cartSlice = createSlice({
	name: "cart",

	initialState: initialState,

	reducers: {
      addToCart: (state, action) => {
         state.items = [...state.items, action.payload];
      },

      removeFromCart: (state, action) => {
         state.items = state.items.filter((item) => {
            return item.id !== action.payload.id
         })
      },
	},
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
