import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productsAPI } from "../../api/api";

const initialState = {
	items: [],
	isLoading: true,
};

export const itemsFetch = createAsyncThunk("products/itemsFetch", async () => {
	try {
		const response = await productsAPI.getProducts();
		return response.data;
	} catch (err) {
		const data = [{ brand: err.message, model: err.request.status }];
		return data;
	}
});

const productsSlice = createSlice({
	name: "products",

	initialState: initialState,

	reducers: {
		addNewItem: (state, action) => {
			state.items = [...state.items, action.payload];
		},

		removeItem: (state, action) => {
			state.items = state.items.filter((item) => {
				return item.id !== action.payload.id;
			});
		},
	},

	extraReducers: (builder) => {
		builder.addCase(itemsFetch.pending, (state, action) => {
			state.isLoading = true;
		}),
			builder.addCase(itemsFetch.fulfilled, (state, action) => {
				state.isLoading = false;
				state.items = action.payload;
			}),
			builder.addCase(itemsFetch.rejected, (state, action) => {
				state.isLoading = false;
				state.items = action.payload;
			});
	},
});

export const { addNewItem, removeItem } = productsSlice.actions;

export default productsSlice.reducer;
