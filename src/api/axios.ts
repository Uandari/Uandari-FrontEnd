/* eslint-disable no-param-reassign */
import { getToken, removeToken } from '@utils/index';
import axios from 'axios';

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

const cleanApi = axios.create();

const publicApi = axios.create({
  baseURL: apiBaseUrl,
});

const privateApi = axios.create({
  baseURL: apiBaseUrl,
});

privateApi.interceptors.request.use(async (config) => {
  const idToken = getToken();
  config.headers.Authorization = idToken;
  return config;
});

privateApi.interceptors.response.use(
  (response) => {
    return response;
  },

  async (err) => {
    if (err?.response.status === 401) {
      removeToken();
      window.location.reload();
    }
    throw err;
  },
);

export { cleanApi, publicApi, privateApi };
