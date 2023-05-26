import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../products/productApi";

export const userApi = createApi({
  reducerPath: "userApi",
  tagTypes: ["Users"],

  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/user`,
  }),

  endpoints: (build) => ({
    getOrdersByPhoneOrEmail: build.query({
      query: ({ phone, email }) =>
        `orders?${phone ? "phone=" + phone : "email=" + email}`,

      providesTags: ["Users"],
    }),

    createOrUpdateUser: build.mutation({
      query: (body) => ({
        url: "create",
        method: "POST",
        body,
      }),

      providesTags: ["Users"],
    }),
  }),
});

export const {
  useGetOrdersByPhoneOrEmailQuery,
  useCreateOrUpdateUserMutation,
} = userApi;
