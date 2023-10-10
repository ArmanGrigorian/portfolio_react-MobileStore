import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	details: {
		id: crypto.randomUUID(),
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

const newItemSlice = createSlice({
	name: "newItem",

	initialState: initialState,

	reducers: {
		setItem: (state, action) => {
			state.details = action.payload;
		},
	},
});

export const { setItem } = newItemSlice.actions;

export default newItemSlice.reducer;
