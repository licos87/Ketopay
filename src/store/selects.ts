import { AppState } from "./types";

export const selectLoadNews = (state: AppState) => state.news;
export const selectIsLoading = (state: AppState) => state.isLoading;
export const selectIsError = (state: AppState) => state.isError;
