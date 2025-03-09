import { createAction } from "@reduxjs/toolkit";
import { TNews } from "../shared/types";

export const loadNews = createAction<TNews[]>('data/loadNews')
export const changeLoadStatus = createAction<boolean>('app/loadStatus')
export const changeErrorStatus = createAction<boolean>('app/errorStatus');