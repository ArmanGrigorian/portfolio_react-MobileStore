import axios from "axios";
import { T_Params } from "../types/types";

const instance = axios.create({
	baseURL: import.meta.env.VITE_BASE_URL,
});

export const productsAPI = {
	getAllProducts: () => {
		return instance.get("/mobileStore");
	},

	getSingleItem: (id: string) => {
		return instance.get("/mobileStore/" + id);
	},

	getProductsBy: ({
		param1 = "1",
		param2 = "sortBy",
		param3 = "release",
		param4 = "desc",
		param5 = "",
		param6 = "",
	}: T_Params) => {
		return instance.get(
			`/mobileStore?page=${param1}&limit=8&${param2}=${param3}&order=${param4}&${param5}=${param6}`,
		);
	},
};
