import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: "localhost:3000"}),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => "/api/products",
          }),
















        getOrders : builder.query({
            query: ()=> 'api/orders'
        }),
        getOrderById : builder.query({
            query: (id)=> 'api/orders/'+id,
        }),
        deleteOrder: builder.mutation({
            query: (id)=>({
                url:'api/orders/'+id,
                method:"DELETE"
            })
        }),
        addOrder: builder.mutation({
            query: (body)=>({
                url:'api/orders',
                method:"POST",
                body:body
            })
        }),







    }),
})

export const {useGetProductsQuery, useGetOrdersQuery, useGetOrderByIdQuery, useDeleteOrderMutation, useAddOrderMutation }=api