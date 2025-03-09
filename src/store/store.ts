import { configureStore } from "@reduxjs/toolkit";
import { createAPI } from "../app/api";
import { reducer } from "./reducer";

export const api = createAPI();

export const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: api
    }
  })
});