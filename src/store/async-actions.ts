import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, AppState } from './types';
import { changeErrorStatus, changeLoadStatus, loadNews } from './actions';
import { MONTH, TOKEN2, YEAR } from '../app/api/const';
import { dataAdapter } from '../shared/utils/data-adapter';
import { TServerResponse } from '../shared/types';


export const fetchNewsAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: AppState;
    extra: AxiosInstance;
  }
  >(
    'data/fetchNews',
    async (_arg, { dispatch, extra: api }) => {
      try {
        const { data } = await api.get(
          `${YEAR}/${MONTH}.json?api-key=${TOKEN2}`
        );
        const newsData: TServerResponse[] = data.response.docs;

        dispatch(loadNews(dataAdapter(newsData)));
      } catch (error) {
        console.error(error)
        dispatch(changeErrorStatus(true))
      } finally {
        dispatch(changeLoadStatus(false))
      }
    }
);
