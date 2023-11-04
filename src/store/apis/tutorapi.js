/* eslint-disable no-unused-vars */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseAPI, apiKey } from "../../utils/baseAPIandKey";

const TutorsAPI = createApi({
  reducerPath: "tutors",
  baseQuery: fetchBaseQuery({
    baseUrl: baseAPI,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().currentUser.data.token;
      headers.set("Authorization", `Bearer ${token}`);
    },
  }),
  endpoints(builder) {
    return {
      fetchAllTutors: builder.query({
        providesTags: ["tutors"],
        query: () => {
          return {
            url: "/api/users/all-tutors",
            method: "GET",
          };
        },
      }),
      fetchTutorById: builder.query({
        providesTags: ["tutor"],
        query: (id) => {
          return {
            url: `/api/users/profile/${id}`,
            method: "GET",
          };
        },
      }),
    };
  },
});
export const { useFetchAllTutorsQuery, useFetchTutorByIdQuery } = TutorsAPI;
export { TutorsAPI };
