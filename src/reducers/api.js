import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: "localhost:3000"}),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => "/api/products",
          }),
          getProductsById: builder.query({
            query: (id) => '/api/products'+id,
          }),
          getCategoryByName: builder.query({
            query: (name) => `/api/category/${name}`,
          }),
          getCategory: builder.query({
            query: () => "/api/category",
          }),

    }),
})

export const {useGetProductsQuery, useGetProductsByIdQuery, useGetCategoryByNameQuery, useGetCategoryQuery}=api