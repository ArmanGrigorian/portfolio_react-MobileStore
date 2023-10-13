export type T_Params = {
	param1: string;
	param2: string;
	param3: string;
   param4: string;
   param5?: string;
   param6?: string;
};

export type T_SingleItem = {
	id: string;
	brand: string;
	model: string;
	price: number;
	count: number;
	discountPercent: number;
	isDiscounted: boolean;
	release: number;
	rating: number;
	src: string;
	alt: string;
};

export interface I_ProductsSlice {
	categories: string[];
	activeCategory: string;
	params: T_Params;
	storeItems: [] | T_SingleItem[];
	cartItems: [] | T_SingleItem[];
	isLoading: boolean;
	currentItem: T_SingleItem;
}

export interface I_AdminSlice {
	isLoading: boolean;
	isAdmin: boolean;
	login: string;
	password: string;
	loginValue: string;
	passwordValue: string;
	searchValue: string;
	allItems: [] | T_SingleItem[];
}