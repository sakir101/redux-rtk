import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000",
    }),
    tagTypes: ["Product"],
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({
                url: "/products"
            }),
            providesTags: ["Product"],
        }),

        addProducts: builder.mutation({
            query: (data) => ({
                url: "/product",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["Product"],
        }),
        removeProduct: builder.mutation({
            query: (id) => ({
                url: `/product/${id}`,
                method: "DELETE",

            }),
            invalidatesTags: ["Product"],
        }),

    }),
});

console.log(productApi.endpoints)

export const { 
    useGetProductsQuery, 
    useAddProductsMutation, 
    useRemoveProductMutation 
} = productApi;