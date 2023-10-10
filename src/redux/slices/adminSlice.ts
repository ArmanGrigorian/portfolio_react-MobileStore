import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isAdmin: false,
	login: "admin",
	password: "admin",
	loginValue: "",
	passwordValue: "",
};

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

export const { setLoginValue, setPasswordValue, setLogin, setPassword, checkLogPass } =
	adminSlice.actions;

export default adminSlice.reducer;
