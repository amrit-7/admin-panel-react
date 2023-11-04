/* eslint-disable no-unused-vars */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseAPI, apiKey } from "../../utils/baseAPIandKey";

const SubjectsAPI = createApi({
  reducerPath: "subjects",
  baseQuery: fetchBaseQuery({
    baseUrl: baseAPI,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().currentUser.data.token;
      headers.set("Authorization", `Bearer ${token}`);
    },
  }),
  endpoints(builder) {
    return {
      FetchAllSubjects: builder.query({
        providesTags: ["subjects"],
        query: () => {
          return {
            url: "/api/subjects",
            method: "GET",
          };
        },
      }),
      AddNewSubject: builder.mutation({
        invalidatesTags: ["subjects"],
        query: (title) => {
          return {
            url: "/api/subjects",
            body: { title },
            method: "POST",
          };
        },
      }),
      DeleteSubject: builder.mutation({
        invalidatesTags: ["subjects"],
        query: (id) => {
          return {
            url: `/api/subjects/${id}`,
            method: "DELETE",
          };
        },
      }),
      UpdateSubject: builder.mutation({
        invalidatesTags: ["subjects"],
        query: (data) => {
          const id = data.idtoedit;
          const title = data.subject;
          return {
            url: "/api/subjects",
            body: { id, title },
            method: "PUT",
          };
        },
      }),
    };
  },
});
export const {
  useAddNewSubjectMutation,
  useFetchAllSubjectsQuery,
  useDeleteSubjectMutation,
  useUpdateSubjectMutation,
} = SubjectsAPI;
export { SubjectsAPI };
