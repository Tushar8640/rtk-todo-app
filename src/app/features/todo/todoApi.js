import { apiSlice } from "../api/apiSlice";

export const todoApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
      getTodos: builder.query({
        query: () => ({
          url: `/todos`,
          method: "GET",
          // body: data,
        }),
      }),
    }),
  });

export const {useGetTodosQuery} = todoApi;
