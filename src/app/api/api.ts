import axios, { AxiosError, AxiosInstance } from 'axios';
import { BASE_URL, REQUEST_TIMEOUT } from './const';

export const createAPI = (): AxiosInstance => {
  const api: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
    headers: {
      'Accept': 'application/json',
    },
  });

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<{ message: string }>) => {
      if (error.response) {
        const errorMessage = error.response.data;
        console.error(errorMessage.message);
      }

      throw error;
    }
  );
  return api;
};
