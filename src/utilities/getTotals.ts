import { ACTION, T_SingleItem } from "../types/types";

const getTotalOf = (action: string, cartItems: T_SingleItem[]): number => {
	switch (action) {
		case ACTION.PRICE:
			return cartItems.reduce((acc, val): number => {
				acc += val.price * val.count;
				return acc;
			}, 0);
		case ACTION.COUNT:
			return cartItems.reduce((acc, val) => {
				acc += val.count;
				return acc;
			}, 0);
		default:
			return 0;
	}
};

export default getTotalOf;
