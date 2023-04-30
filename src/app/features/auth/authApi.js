import { apiSlice } from "../api/apiSlice";
import {  userLoggedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "/user/login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          localStorage.setItem(
            "auth",
            JSON.stringify({
              accessToken: result.data.token,
              user: result.data.user,
            })
          );
          dispatch(
            userLoggedIn({
              accessToken: result.data.token,
              user: result.data.user,
            })
          );
        } catch (err) {
          //nothing to do
          console.log(err);
        }
      },
    }),
    signUp: builder.mutation({
      query: (data) => ({
        url: "/user/addUser",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          const data = result?.data?.user;
          if (result?.data?.status === "success") {
            dispatch(
              apiSlice.util.updateQueryData(
                "getAllUsers",
                undefined,
                (draft) => {
                  draft?.users?.unshift(data);
                }
              )
            );
          }
        } catch (err) {
          //nothing to do
          console.log(err);
        }
      },
    }),
  }),
});

export const { useSignUpMutation, useLoginMutation } = authApi;
