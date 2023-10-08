import axios from "axios";

const instance = axios.create({
	baseURL: "https://64d772272a017531bc134033.mockapi.io",
});

export const productsAPI = {
   getProducts: () => {
      return instance.get("/mobileStore");
   }
}