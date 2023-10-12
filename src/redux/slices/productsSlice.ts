import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productsAPI } from "../../api/api";

const initialState = {
	categories: ["All", "Apple", "Samsung", "Xiaomi", "Nokia"],
	activeCategory: "all",
	params: {
		param1: "1",
		param2: "sortBy",
		param3: "release",
		param4: "desc",
	},
	storeItems: [],
	cartItems: [],
	isLoading: true,
	currentItem: {},
};

export const pageItemsFetch = createAsyncThunk("products/pageItemsFetch", async () => {
	try {
		const response = await productsAPI.getPageProducts();
		return response.data;
	} catch (err) {
		console.log(err);
	}
});

export const separateFetch = createAsyncThunk("products/separateFetch", async (params) => {
	try {
		const response = await productsAPI.getProductsBy(params);
		return response.data;
	} catch (err) {
		console.log(err);
	}
});

const productsSlice = createSlice({
	name: "products",

	initialState: initialState,

	reducers: {
		setParams: (state, action) => {
			state.params = action.payload;
		},

		setCurrentItem: (state, action) => {
			state.currentItem = action.payload;
		},

		addToCart: (state, action) => {
			const currentItem = state.cartItems.find((item) => {
				return item.id === action.payload.id;
			});

			if (currentItem) {
				currentItem.count += 1;
			} else {
				state.cartItems = [...state.cartItems, { ...action.payload, count: 1 }];
			}
		},

		removeFromCart: (state, action) => {
			const removeItem = state.cartItems.find((item) => {
				return item.id === action.payload.id;
			});

			if (removeItem.count > 0) {
				removeItem.count -= 1;
			} else {
				state.cartItems = state.cartItems.filter((item) => {
					return item.id !== action.payload.id;
				});
			}
		},

		deleteFromCart: (state, action) => {
			state.cartItems = state.cartItems.filter((item) => {
				return item.id !== action.payload.id;
			});
		},

		clearCart: (state) => {
			state.cartItems = initialState.cartItems;
		},

		setActiveCategory: (state, action) => {
			state.activeCategory = action.payload;
		},
	},

	extraReducers: (builder) => {
		// PAGE
		builder.addCase(pageItemsFetch.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(pageItemsFetch.fulfilled, (state, action) => {
			state.isLoading = false;
			state.storeItems = action.payload;
		});
		builder.addCase(pageItemsFetch.rejected, (state) => {
			state.isLoading = false;
		});
		// SORT
		builder.addCase(separateFetch.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(separateFetch.fulfilled, (state, action) => {
			state.isLoading = false;
			state.storeItems = action.payload;
		});
		builder.addCase(separateFetch.rejected, (state) => {
			state.isLoading = false;
		});
	},
});

export const {
	setParams,
	setCurrentItem,
	addToCart,
	removeFromCart,
	deleteFromCart,
	clearCart,
	setActiveCategory,
} = productsSlice.actions;

export default productsSlice.reducer;
