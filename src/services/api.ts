import axios from 'axios';

export const api = axios.create({
  // @TODO => Add into .env
  // baseURL: 'http://localhost:3000',
  baseURL: 'https://88dc97639c24.ngrok.io',
})
