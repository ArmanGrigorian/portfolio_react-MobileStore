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
		console.log(err);
	}
});

export const putFetch = createAsyncThunk("admin/putFetch", async (id, data) => {
	try {
		await productsAPI.putItem(id, data);
		const response = await productsAPI.getAllProducts();
		return response.data;
	} catch (err) {
		console.log(err);
	}
});

export const deleteFetch = createAsyncThunk("admin/deleteFetch", async (id) => {
	try {
		await productsAPI.deleteItem(id);
		const response = await productsAPI.getAllProducts();
		return response.data;
	} catch (err) {
		console.log(err);
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
		builder.addCase(allItemsFetch.rejected, (state) => {
			state.isLoading = false;
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
		builder.addCase(certainItemFetch.rejected, (state) => {
			state.isLoading = false;
		});
		// PATCH
		builder.addCase(putFetch.fulfilled, (state, action) => {
			state.allItems = action.payload;
		});
		builder.addCase(putFetch.rejected, (state) => {
			state.isLoading = false;
		});
		// DELETE
		builder.addCase(deleteFetch.fulfilled, (state, action) => {
			state.allItems = action.payload;
		});
		builder.addCase(deleteFetch.rejected, (state) => {
			state.isLoading = false;
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
