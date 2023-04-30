import { apiSlice } from "../api/apiSlice";

export const todoApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: ({ email, queryString }) => ({
        url: `/todo/todos/${email}?${queryString}`,
        method: "GET",
      }),
    }),
    addTodo: builder.mutation({
      query: (data) => ({
        url: `/todo/addtodo`,
        method: "POST",
        body: data,
      }),
    }),
    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `/todo/addtodo/${id}`,
        method: "DELETE",
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

export const {
  useGetTodosQuery,
  useGetCategoriesQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
} = todoApi;
