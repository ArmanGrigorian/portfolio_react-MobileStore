import axios from "axios";
import { T_Params, T_SingleItem } from "../types/types";

const instance = axios.create({
	baseURL: "https://64d772272a017531bc134033.mockapi.io",
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

	postItem: (data: T_SingleItem) => {
		return instance.post("/mobileStore", data, {
			headers: { "content-type": "application/json" },
		});
	},

	putItem: (id: string, data: T_SingleItem) => {
		return instance.put("/mobileStore/" + id, data, {
			headers: { "content-type": "application/json" },
		});
	},

	deleteItem: (id: string) => {
		return instance.delete("/mobileStore/" + id);
	},
};
