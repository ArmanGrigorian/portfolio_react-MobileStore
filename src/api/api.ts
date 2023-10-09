import axios from "axios";

const instance = axios.create({
	baseURL: "https://64d772272a017531bc134033.mockapi.io",
});

export const productsAPI = {
	getAllProducts: () => {
		return instance.get("/mobileStore");
	},

   getProductsBy: ({param1, param2}) => {
       return instance.get(`/mobileStore?sortBy=${param1}&order=${param2}`);
   },
};