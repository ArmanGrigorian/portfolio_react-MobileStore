import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productsSlice.ts";

export const store = configureStore({
	reducer: {
		products: productsReducer,
	},
});
