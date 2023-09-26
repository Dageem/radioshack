import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/api/products',
    }),
    getCartItems: builder.query({
      query: () => '/api/cartitems',
    }),
    addCartItem: builder.mutation({
      query: (newItem) => ({
        url: '/api/cartitems',
        method: 'POST',
        body: newItem,
      }),
    }),
    deleteCartItem: builder.mutation({
      query: (id) => ({
        url: `/api/cartitems/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetCartItemsQuery,
  useAddCartItemMutation,
  useDeleteCartItemMutation,
} = api;
