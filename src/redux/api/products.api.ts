import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
	reducerPath: "productsApi",
	baseQuery: fetchBaseQuery({
		baseUrl: import.meta.env.BASE_URL,
	}),
	endpoints: (builder) => ({
		getProducts: builder.query({
			query: () => "/mobileStore",
		}),
		postProduct: builder.mutation({
			query: (body) => ({
				method: "POST",
				headers: { "content-type": "application/json" },
				url: "/mobileStore",
				body: JSON.stringify(body),
			}),
		}),
		putProduct: builder.mutation({
			query: (params) => ({
				method: "PUT",
				headers: { "content-type": "application/json" },
				url: `/mobileStore/${params.id}`,
				body: JSON.stringify(params.body),
			}),
		}),
		deleteProduct: builder.mutation({
			query: (params) => ({
				method: "DELETE",
				url: `/mobileStore/${params.id}`,
			}),
		}),
	}),
	tagTypes: ["mobileStore"],
});

export const {
	useGetProductsQuery,
	usePostProductMutation,
	usePutProductMutation,
	useDeleteProductMutation,
} = productsApi;
