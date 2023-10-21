import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./slices/adminSlice.ts";
import productsReducer from "./slices/productsSlice.ts";
import clockReducer from "./slices/clockSlice.ts"

export const store = configureStore({
	reducer: {
		products: productsReducer,
		admin: adminReducer,
		clock: clockReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
