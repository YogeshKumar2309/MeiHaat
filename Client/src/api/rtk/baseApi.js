// // src/api/rtk/baseApi.js
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const baseApi = createApi({
//   // reducerPath: 'api',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'http://localhost:3000/api', // tumhare backend ka base url
//     // prepareHeaders: (headers, { getState }) => {
//     //   const token = getState().auth.token;
//     //   if (token) {
//     //     headers.set('authorization', `Bearer ${token}`);
//     //   }
//     //   return headers;
//     // },
//   }),
//   // tagTypes: ['User', 'Order', 'Restaurant'],
//   // endpoints: () => ({}),
// });

// src/api/rtk/baseApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api", // Your API base URL
    credentials: "include",
    prepareHeaders: (headers) => {
      // Add any default headers here
      return headers;
    },
  }),
  endpoints: () => ({}), // Start with empty endpoints
});

export default baseApi;
