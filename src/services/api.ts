import axios, { AxiosRequestConfig } from 'axios';

const api = axios.create({
  // @TODO => Add into .env
  baseURL: 'http://localhost:3000',
})

api.interceptors.request.use((config: AxiosRequestConfig): AxiosRequestConfig => {
  const authToken = localStorage.getItem('@auth/token');

  const newConfig = {
    ...config,
  };

  if (authToken) {
    newConfig.headers.Authorization = `Bearer ${authToken}`;
  }

  return newConfig;
});

export { api }
