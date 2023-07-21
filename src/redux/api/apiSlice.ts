import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// amader overall jotogulo api/endpoint gulo ache, sob ekhane integration hobe
export const api = createApi({
  reducerPath: 'api',
  tagTypes: ['comments'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://technet-server-phi.vercel.app/',
    // baseUrl: 'http://localhost:5000/',
  }),
  endpoints: () => ({}),
});
