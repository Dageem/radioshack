import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8081" }),
  endpoints: (builder) => ({
    getCartItems: builder.query({
      query: () => "/api/cartitems",
    }),
    addCartItem: builder.mutation({
      query: (newItem) => ({
        url: "/api/cartitems",
        method: "POST",
        body: newItem,
      }),
    }),
    deleteCartItem: builder.mutation({
      query: (id) => ({
        url: `/api/cartitems/${id}`,
        method: "DELETE",
      }),
    }),
    getProducts: builder.query({
      query: () => "/api/products",
    }),
    getProductsById: builder.query({
      query: (id) => "/api/products/" + id,
    }),
    getProductsByCategory: builder.query({
      query: (categoryName) => `/api/products/category/${categoryName}`,
    }),
    getCategoryByName: builder.query({
      query: (name) => `/api/category/${name}`,
    }),
    getCategory: builder.query({
      query: () => "/api/category",
    }),
    getOrders: builder.query({
      query: () => "api/orders",
    }),
    getOrderById: builder.query({
      query: (id) => "api/orders/" + id,
    }),
    deleteOrder: builder.mutation({
      query: (id) => ({
        url: "api/orders/" + id,
        method: "DELETE",
      }),
    }),
    addOrder: builder.mutation({
      query: (body) => ({
        url: "api/orders",
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetCartItemsQuery,
  useAddCartItemMutation,
  useDeleteCartItemMutation,
  useGetProductsByIdQuery,
  useGetCategoryByNameQuery,
  useGetCategoryQuery,
  useGetOrdersQuery,
  useGetOrderByIdQuery,
  useDeleteOrderMutation,
  useAddOrderMutation,
  useGetProductsByCategoryQuery,
} = api;
