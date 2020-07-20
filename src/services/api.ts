import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

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

api.interceptors.response.use(
  (value: AxiosResponse): AxiosResponse => {
    return value
  },
  (error: AxiosError) => {
    const INVALID_JWT_MSG = 'Invalid or expired JWT'

    if (error.response?.status === 401 && error.response.data === INVALID_JWT_MSG) {
      window.localStorage.removeItem("@auth/token")
      window.location.href = '/login';
    }
  }
)

export { api }
