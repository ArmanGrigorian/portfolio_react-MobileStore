import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productsSlice.ts";
import adminReducer from "./slices/adminSlice.ts";
import newItemReducer from "./slices/newItemSlice.ts";

export const store = configureStore({
	reducer: {
		products: productsReducer,
		admin: adminReducer,
		newItem: newItemReducer,
	},
});
