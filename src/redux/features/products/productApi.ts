import { api } from '@/redux/api/apiSlice';

const productApi = api.injectEndpoints({
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
      invalidatesTags: ['comments'],
    }),

    getComment: builder.query({
      query: (id) => `/comment/${id}`,
      providesTags: ['comments'],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useSingleProductQuery,
  usePostCommentMutation,
  useGetCommentQuery,
} = productApi;
