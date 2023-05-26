import { configureStore } from "@reduxjs/toolkit";
import persistStore from "redux-persist/es/persistStore";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

import { productApi } from "./products/productApi";
import { userApi } from "./users/userApi";
import cartSlice from "./cart/cartSlice";

const cartPersistConfig = {
  key: "cart",
  storage,
};

export const store = configureStore({
  reducer: {
    cart: persistReducer(cartPersistConfig, cartSlice),

    [productApi.reducerPath]: productApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([productApi.middleware, userApi.middleware]),
});

export const persistor = persistStore(store);
