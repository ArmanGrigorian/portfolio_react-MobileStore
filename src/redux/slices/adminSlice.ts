import { productsAPI } from "../../api/api";
import { allTrim } from "../../utilities/allTrim";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { I_AdminSlice, T_SingleItem, T_initialValues } from "../../types/types";

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
		return data;
	} catch (err) {
		console.log(err);
	}
});

export const postFetch = createAsyncThunk("admin/postFetch", async (data: T_initialValues) => {
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
	async ({ id, data }: { id: string; data: T_initialValues }) => {
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

		searchItem: (state) => {
			if (state.searchValue === "all") {
				state.allItems = JSON.parse(localStorage.getItem("allItems")!);
			} else {
				state.allItems = state.allItems.filter((item: T_SingleItem) => {
					if (
						String(item.id) === String(state.searchValue) ||
						String(allTrim(item.brand)) === String(allTrim(state.searchValue)) ||
						String(allTrim(item.model)) === String(allTrim(state.searchValue))
					) {
						return item;
					}
				});
			}
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
			localStorage.setItem("maxLength", JSON.stringify(action.payload.length));
			localStorage.setItem("allItems", JSON.stringify(action.payload));
			state.allItems = action.payload;
		});
		builder.addCase(allItemsFetch.rejected, (state): void => {
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
	searchItem,
} = adminSlice.actions;

export default adminSlice.reducer;
