import { createSlice } from "@reduxjs/toolkit";


const initialState = {
	isAdmin: false,
	login: "admin",
	password: "admin",
};

const adminSlice = createSlice({
	name: "products",

	initialState: initialState,

	reducers: {
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
});

export const { setLogin, setPassword, checkLogPass } = adminSlice.actions;

export default adminSlice.reducer;
