import { apiSlice } from "../api/apiSlice";

export const todoApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: (email) => ({
        url: `/todo/todos/${email}`,
        method: "GET",
      }),
    }),
    getCategories: builder.query({
      query: () => ({
        url: `/category/categories`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetTodosQuery,useGetCategoriesQuery } = todoApi;
