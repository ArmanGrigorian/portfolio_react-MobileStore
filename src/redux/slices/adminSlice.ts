import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productsAPI } from "../../api/api";

const initialState = {
	isLoading: true,
	isAdmin: false,
	login: "admin",
	password: "admin",
	loginValue: "",
	passwordValue: "",
	searchValue: "",
	allItems: [],
};

export const allItemsFetch = createAsyncThunk("admin/allItemsFetch", async () => {
	try {
		const response = await productsAPI.getAllProducts();
		return response.data;
	} catch (err) {
		const data = [{ brand: err.message, model: err.request.status }];
		return data;
	}
});

export const certainItemFetch = createAsyncThunk("admin/certainItemFetch", async () => {
	try {
		const response = await productsAPI.getAllProducts();
		return response.data;
	} catch (err) {
		const data = [{ brand: err.message, model: err.request.status }];
		return data;
	}
});

const adminSlice = createSlice({
	name: "products",

	initialState: initialState,

	reducers: {
		setLoginValue: (state, action) => {
			state.loginValue = action.payload;
		},

		setPasswordValue: (state, action) => {
			state.passwordValue = action.payload;
		},

		setSearchValue: (state, action) => {
			state.searchValue = action.payload;
		},

		setLogin: (state, action) => {
			state.password = action.payload;
		},

		setPassword: (state, action) => {
			state.password = action.payload;
		},

		checkLogPass: (state, action) => {
			state.isAdmin =
				state.login === action.payload.login && state.password === action.payload.password
					? true
					: false;
		},
	},

	extraReducers: (builder) => {
		// ALL
		builder.addCase(allItemsFetch.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(allItemsFetch.fulfilled, (state, action) => {
			state.isLoading = false;
			state.allItems = action.payload;
		});
		builder.addCase(allItemsFetch.rejected, (state, action) => {
			state.isLoading = false;
			state.allItems = action.payload;
		});
		// Certain
		builder.addCase(certainItemFetch.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(certainItemFetch.fulfilled, (state, action) => {
			state.isLoading = false;
			state.allItems = action.payload.filter((item) => {
				if (
					String(item.id).toLowerCase() === String(state.searchValue).toLowerCase() ||
					String(item.brand).toLowerCase() === String(state.searchValue).toLowerCase() ||
					String(item.model).toLowerCase() === String(state.searchValue).toLowerCase()
				) {
					return item;
				}
			});
		});
		builder.addCase(certainItemFetch.rejected, (state, action) => {
			state.isLoading = false;
			state.allItems = action.payload;
		});
	},
});

export const {
	setLoginValue,
	setPasswordValue,
	setSearchValue,
	setLogin,
	setPassword,
	checkLogPass,
} = adminSlice.actions;

export default adminSlice.reducer;
