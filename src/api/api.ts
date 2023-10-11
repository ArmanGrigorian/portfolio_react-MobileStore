import axios from "axios";

const instance = axios.create({
	baseURL: "https://64d772272a017531bc134033.mockapi.io",
});

export const productsAPI = {
	getAllProducts: () => {
		return instance.get("/mobileStore");
	},

	getPageProducts: () => {
		return instance.get("/mobileStore?page=1&limit=8&sortBy=release&order=desc");
	},

	getProductsBy: ({
		param1 = "1",
		param2 = "sortBy",
		param3 = "release",
		param4 = "desc",
		param5 = "",
		param6 = "",
	}) => {
		return instance.get(
			`/mobileStore?page=${param1}&limit=8&${param2}=${param3}&order=${param4}&${param5}=${param6}`,
		);
	},

	postItem: (data) => {
		return instance.post("/mobileStore", data, {
			headers: { "content-type": "application/json" },
		});
	},

	putItem: (id, data) => {
		return instance.put("/mobileStore/" + id, data, {
			headers: { "content-type": "application/json" },
		});
	},

	deleteItem: (id) => {
		return instance.delete("/mobileStore/" + id);
	},
};
