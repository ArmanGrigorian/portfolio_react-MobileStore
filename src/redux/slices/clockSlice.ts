import { RootState } from "../store";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	time: new Date().toTimeString().split(" ")[0],
};

const clockSlice = createSlice({
	name: "clock",

	initialState: initialState,

	reducers: {
		setTime: (state) => {
			state.time = new Date().toTimeString().split(" ")[0];
		},
	},
});

export const selectTime = (state: RootState) => state.clock.time;

export const { setTime } = clockSlice.actions;

export default clockSlice.reducer;
