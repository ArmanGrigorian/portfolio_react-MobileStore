import { configureStore } from "@reduxjs/toolkit";
import clockReducer from "./slices/clockSlice.ts";
import adminReducer from "./slices/adminSlice.ts";
import productsReducer from "./slices/productsSlice.ts";
import { productsApi } from "./api/products.api.ts";

export const store = configureStore({
	reducer: {
		products: productsReducer,
		admin: adminReducer,
		clock: clockReducer,
		[productsApi.reducerPath]: productsApi.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
