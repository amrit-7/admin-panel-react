/* eslint-disable no-unused-vars */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseAPI, apiKey } from "../../utils/baseAPIandKey";

const OptionsAPI = createApi({
  reducerPath: "options",
  baseQuery: fetchBaseQuery({
    baseUrl: baseAPI,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().currentUser.data.token;
      headers.set("Authorization", `Bearer ${token}`);
    },
  }),
  endpoints(builder) {
    return {
      FetchAllOptions: builder.query({
        providesTags: ["options"],
        query: () => {
          return {
            url: "/api/options",
            method: "GET",
          };
        },
      }),
      FetchParentOptions: builder.query({
        query: () => {
          return {
            url: "/api/options/category",
            method: "GET",
          };
        },
      }),
      AddNewOption: builder.mutation({
        invalidatesTags: ["options"],
        query: (data) => {
          return {
            url: "/api/options",
            body: data,
            method: "POST",
          };
        },
      }),
      AddNewCategory: builder.mutation({
        invalidatesTags: ["options"],
        query: (data) => {
          return {
            url: "/api/options/add-category",
            body: data,
            method: "POST",
          };
        },
      }),
    };
  },
});
export const {
  useAddNewOptionMutation,
  useFetchAllOptionsQuery,
  useAddNewCategoryMutation,
  useFetchParentOptionsQuery,
} = OptionsAPI;
export { OptionsAPI };
