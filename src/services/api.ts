import axios from 'axios';

export const api = axios.create({
  // @TODO => Add into .env
  baseURL: 'http://localhost:3000',
})
