import { DATA } from "../../DATA.ts";
import { RootState } from "../store";
import { productsAPI } from "../../api/api";
import { fullTrim } from "../../utilities/index.ts";
import { I_AdminSlice, LS, T_SingleItem } from "../../types/types";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: I_AdminSlice = {
	isPending: true,
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
				state.allItems = JSON.parse(localStorage.getItem(LS.ALL_ITEMS)!);
			} else {
				state.allItems = state.allItems.filter((item: T_SingleItem) => {
					if (
						String(item.id) === String(state.searchValue) ||
						String(fullTrim(item.brand)) === String(fullTrim(state.searchValue)) ||
						String(fullTrim(item.model)) === String(fullTrim(state.searchValue))
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
		// ALL //////////////////////////////////////////////////
		builder.addCase(allItemsFetch.pending, (state): void => {
			state.isPending = true;
			state.allItems = initialState.allItems;
		});
		builder.addCase(allItemsFetch.fulfilled, (state, action): void => {
			state.isPending = false;
			localStorage.setItem(LS.ALL_ITEMS, JSON.stringify(action.payload));
			state.allItems = action.payload;
		});
		builder.addCase(allItemsFetch.rejected, (state, action): void => {
			state.isPending = false;
			state.allItems = DATA;
			console.log(action.payload);
		});
	},
});

export const selectAdmin = (state: RootState) => state.admin;
export const selectAllItems = (state: RootState) => state.admin.allItems;
export const selectSearchValue = (state: RootState) => state.admin.searchValue;

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
