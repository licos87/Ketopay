import { createReducer } from '@reduxjs/toolkit';
import { changeErrorStatus, changeLoadStatus, loadNews } from './actions';
import { TNews } from '../shared/types';

const initialState = {
  news: <TNews[]> [],
  isLoading: <boolean> true,
  isError: <boolean> false
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(loadNews, (state, { payload }) => {
    state.news = payload;
  });
  builder.addCase(changeLoadStatus, (state, { payload }) => {
    state.isLoading = payload;
  });
  builder.addCase(changeErrorStatus, (state, { payload }) => {
    state.isError = payload;
  });
});
