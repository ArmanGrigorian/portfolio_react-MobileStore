import axios from "axios";

const instance = axios.create({
	baseURL: "https://64d772272a017531bc134033.mockapi.io",
});

export const productsAPI = {
	getAllProducts: () => {
		return instance.get("/mobileStore?sortBy=release&order=desc");
	},

   getProductsBy: ({param1 = "sortBy", param2 = "release", param3 = "desc", param4 = "", param5= ""}) => {
      return instance.get(`/mobileStore?${param1}=${param2}&order=${param3}&${param4}=${param5}`);
   },
};