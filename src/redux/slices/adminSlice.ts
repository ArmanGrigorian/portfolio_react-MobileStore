import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productsAPI } from "../../api/api";
import { I_AdminSlice, T_SingleItem } from "./types";

const initialState: I_AdminSlice = {
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
		const { data } = await productsAPI.getAllProducts();
		localStorage.setItem("AllItems", JSON.stringify(data));
		return data;
	} catch (err) {
		console.log(err);
	}
});

export const certainItemFetch = createAsyncThunk("admin/certainItemFetch", async () => {
	try {
		const { data } = await productsAPI.getAllProducts();
		return data;
	} catch (err) {
		console.log(err);
	}
});

export const postFetch = createAsyncThunk("admin/postFetch", async (data: T_SingleItem) => {
	try {
		await productsAPI.postItem(data);
		const response = await productsAPI.getAllProducts();
		return response.data;
	} catch (err) {
		console.log(err);
	}
});

export const putFetch = createAsyncThunk(
	"admin/putFetch",
	async ({ id, data }: { id: string; data: T_SingleItem }) => {
		try {
			await productsAPI.putItem(id, data);
			const response = await productsAPI.getAllProducts();
			return response.data;
		} catch (err) {
			console.log(err);
		}
	},
);

export const deleteFetch = createAsyncThunk("admin/deleteFetch", async (id: string) => {
	try {
		await productsAPI.deleteItem(id);
		const { data } = await productsAPI.getAllProducts();
		return data;
	} catch (err) {
		console.log(err);
	}
});

const adminSlice = createSlice({
	name: "products",

	initialState: initialState,

	reducers: {
		setLoginValue: (state, action: PayloadAction<string>): void => {
			state.loginValue = action.payload;
		},

		setPasswordValue: (state, action: PayloadAction<string>): void => {
			state.passwordValue = action.payload;
		},

		setSearchValue: (state, action: PayloadAction<string>): void => {
			state.searchValue = action.payload;
		},

		setLogin: (state, action: PayloadAction<string>): void => {
			state.password = action.payload;
		},

		setPassword: (state, action: PayloadAction<string>): void => {
			state.password = action.payload;
		},

		checkLogPass: (
			state,
			action: PayloadAction<{ loginValue: string; passwordValue: string }>,
		): void => {
			state.isAdmin =
				state.login === action.payload.loginValue && state.password === action.payload.passwordValue
					? true
					: false;
		},
	},

	extraReducers: (builder) => {
		// ALL
		builder.addCase(allItemsFetch.pending, (state): void => {
			state.isLoading = true;
		});
		builder.addCase(allItemsFetch.fulfilled, (state, action): void => {
			state.isLoading = false;
			state.allItems = action.payload;
		});
		builder.addCase(allItemsFetch.rejected, (state): void => {
			state.isLoading = false;
		});
		// Certain
		builder.addCase(certainItemFetch.pending, (state): void => {
			state.isLoading = true;
		});
		builder.addCase(certainItemFetch.fulfilled, (state, action): void => {
			state.isLoading = false;
			state.allItems = action.payload.filter((item: T_SingleItem) => {
				if (
					String(item.id).toLowerCase() === String(state.searchValue).toLowerCase() ||
					String(item.brand).toLowerCase() === String(state.searchValue).toLowerCase() ||
					String(item.model).toLowerCase() === String(state.searchValue).toLowerCase()
				) {
					return item;
				}
			});
		});
		builder.addCase(certainItemFetch.rejected, (state): void => {
			state.isLoading = false;
		});
		// POST
		builder.addCase(postFetch.fulfilled, (state, action): void => {
			state.allItems = action.payload;
		});
		builder.addCase(postFetch.rejected, (state): void => {
			state.isLoading = false;
		});
		// PUT
		builder.addCase(putFetch.fulfilled, (state, action): void => {
			state.allItems = action.payload;
		});
		builder.addCase(putFetch.rejected, (state): void => {
			state.isLoading = false;
		});
		// DELETE
		builder.addCase(deleteFetch.fulfilled, (state, action): void => {
			state.allItems = action.payload;
		});
		builder.addCase(deleteFetch.rejected, (state): void => {
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
