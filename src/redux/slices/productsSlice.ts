import { productsAPI } from "../../api/api";
import { I_ProductsSlice, T_Params, T_SingleItem } from "../../types/types";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: I_ProductsSlice = {
	categories: ["All", "Apple", "Samsung", "Xiaomi", "Nokia"],
	activeCategory: "all",
	sortOptions: [
		["price asc", "Price ( Low - High )"],
		["price desc", "Price ( High - Low )"],
		["model desc", "Name ( A - Z )"],
		["model asc", "Name ( Z - A )"],
		["release asc", "Release ( old first )"],
		["release desc", "Release ( new first )"],
		["rating asc", "Rating ( from lowest )"],
		["rating desc", "Rating ( from highest )"],
	],
	params: {
		param1: "1",
		param2: "sortBy",
		param3: "release",
		param4: "desc",
	},
	storeItems: [],
	cartItems: [],
	isPending: true,
	currentItem: {
		id: "",
		brand: "",
		model: "",
		price: 0,
		count: 0,
		discountPercent: 0,
		isDiscounted: false,
		release: 0,
		rating: 0,
		src: "",
		alt: "",
	},
};


export const separateFetch = createAsyncThunk(
	"products/separateFetch",
	async (params: T_Params) => {
		try {
			const all = await productsAPI.getAllProducts();
			const brand = await productsAPI.getProductsByCategory(params.param6);
			localStorage.setItem("length", JSON.stringify(brand.data.length))
			localStorage.setItem("allItems", JSON.stringify(all.data));

			const response = await productsAPI.getProductsBy(params);
			return response.data;
		} catch (err) {
			console.log(err);
		}
	},
);

export const singleItemFetch = createAsyncThunk("products/singleItemFetch", async (id: string) => {
	try {
		const { data } = await productsAPI.getSingleItem(id);
		return data;
	} catch (err) {
		console.log(err);
	}
});

const productsSlice = createSlice({
	name: "products",

	initialState: initialState,

	reducers: {
		setParams: (state, action: PayloadAction<T_Params>): void => {
			state.params = action.payload;
		},

		addToCart: (state, action: PayloadAction<T_SingleItem>): void => {
			const currentItem = state.cartItems.find((item) => {
				return item.id === action.payload.id;
			});

			if (currentItem) {
				currentItem.count += 1;
			} else {
				state.cartItems = [...state.cartItems, { ...action.payload, count: 1 }];
			}
		},

		removeFromCart: (state, action: PayloadAction<T_SingleItem>): void => {
			const removeItem = state.cartItems.find((item) => {
				return item.id === action.payload.id;
			});

			if (removeItem && removeItem.count > 0) {
				removeItem.count -= 1;
			} else {
				state.cartItems = state.cartItems.filter((item) => {
					return item.id !== action.payload.id;
				});
			}
		},

		deleteFromCart: (state, action: PayloadAction<T_SingleItem>): void => {
			state.cartItems = state.cartItems.filter((item) => {
				return item.id !== action.payload.id;
			});
		},

		clearCart: (state): void => {
			state.cartItems = initialState.cartItems;
		},

		setActiveCategory: (state, action: PayloadAction<string>): void => {
			state.activeCategory = action.payload;
		},
	},

	extraReducers: (builder) => {
		// SINGLE_ITEM //////////////////////////////////////
		builder.addCase(singleItemFetch.pending, (state) => {
			state.isPending = true;
			state.currentItem = initialState.currentItem;
		});
		builder.addCase(singleItemFetch.fulfilled, (state, action) => {
			state.isPending = false;
			localStorage.setItem("singleItem", JSON.stringify(action.payload));
			state.currentItem = action.payload;
		});
		builder.addCase(singleItemFetch.rejected, (state, action) => {
			state.isPending = false;
			state.currentItem = initialState.currentItem;
			console.log(action.payload);
		});
		// SORT /////////////////////////////////////////////////
		builder.addCase(separateFetch.pending, (state): void => {
			state.isPending = true;
		});
		builder.addCase(separateFetch.fulfilled, (state, action): void => {
			state.isPending = false;
			localStorage.setItem("singleItem", JSON.stringify(state.currentItem));
			state.storeItems = action.payload;
		});
		builder.addCase(separateFetch.rejected, (state, action): void => {
			state.isPending = false;
			state.storeItems = initialState.storeItems;
			console.log(action.payload)
		});
	},
});

export const {
	setParams,
	addToCart,
	removeFromCart,
	deleteFromCart,
	clearCart,
	setActiveCategory,
} = productsSlice.actions;

export default productsSlice.reducer;
