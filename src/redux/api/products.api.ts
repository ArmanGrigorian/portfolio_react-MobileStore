import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = import.meta.env.VITE_BASE_URL;
export const productsApi = createApi({
	reducerPath: "productsApi",
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
	}),
	endpoints: (builder) => ({
		getProducts: builder.query({
			query: () => "/mobileStore",
			providesTags: ["mobileStore"],
		}),
		postProduct: builder.mutation({
			query: (body) => ({
				method: "POST",
				headers: { "content-type": "application/json" },
				url: "/mobileStore",
				body: JSON.stringify(body),
			}),
			invalidatesTags: ["mobileStore"],
		}),
		putProduct: builder.mutation({
			query: (params) => ({
				method: "PUT",
				headers: { "content-type": "application/json" },
				url: `/mobileStore/${params.id}`,
				body: JSON.stringify(params.data),
			}),
			invalidatesTags: ["mobileStore"],
		}),
		deleteProduct: builder.mutation({
			query: (params) => ({
				method: "DELETE",
				url: `/mobileStore/${params.id}`,
			}),
			invalidatesTags: ["mobileStore"],
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
