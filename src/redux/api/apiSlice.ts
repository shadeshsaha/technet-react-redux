import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// amader overall jotogulo api/endpoint gulo ache, sob ekhane integration hobe
export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://tech-net-server.vercel.app/',
    // baseUrl: 'https://technet-server-phi.vercel.app/',
    // baseUrl: 'http://localhost:5000/',
  }),
  endpoints: (builder) => ({
    // product get kortechi akhane
    getProducts: builder.query({
      query: () => '/products',
    }),
    singleProduct: builder.query({
      query: (id) => `/product/${id}`,
    }),

    // Mutation -> Redux a mutation hocche post, patch, delete, update
    postComment: builder.mutation({
      query: ({ id, data }) => ({
        // object a 3 ta jinish lagbe. 1. endpoint(url), 2. ki action korte jacchi(post, patch ,delete), 3. data ta ki hobe jeta ami pass korbo.
        url: `/comment/${id}`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useSingleProductQuery,
  usePostCommentMutation,
} = api;
