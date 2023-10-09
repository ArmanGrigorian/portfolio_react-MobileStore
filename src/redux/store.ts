import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productsSlice.ts";
import cartReducer from "./slices/cartSlice.tsx";

export const store = configureStore({
	reducer: {
		products: productsReducer,
		cart: cartReducer,
	},
});
