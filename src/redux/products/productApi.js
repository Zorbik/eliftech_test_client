import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const API_URL = import.meta.env.VITE_API_URL;

export const productApi = createApi({
  reducerPath: "productApi",
  tagTypes: ["Products"],

  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/products`,
  }),

  endpoints: (build) => ({
    getUniqueShops: build.query({
      query: () => `unique/shops`,
      providesTags: ["Products"],
    }),

    getShopProducts: build.query({
      query: ({ page, limit, search, shop }) =>
        `goods/${shop}?&limit=${limit}&page=${page}${
          search ? "&search=" + search : ""
        }`,
      providesTags: ["Products"],
    }),

    addProduct: build.mutation({
      query: (body) => ({
        url: "create",
        method: "POST",
        body,
      }),
      providesTags: ["Products"],
    }),

    changeProduct: build.mutation({
      query: ({ productId, body }) => ({
        url: `${productId}`,
        method: "PATCH",
        body,
      }),
      providesTags: ["Products"],
    }),

    deleteProduct: build.mutation({
      query: (productId) => ({
        url: `${productId}`,
        method: "DELETE",
      }),
      providesTags: ["Products"],
    }),
  }),
});

export const {
  useDeleteProductMutation,
  useAddProductMutation,
  useChangeProductMutation,
  useGetShopProductsQuery,
  useGetUniqueShopsQuery,
} = productApi;
