import axios from 'axios';

export const api = axios.create({
  // @TODO => Add into .env
  // baseURL: 'http://localhost:3000',
  baseURL: 'https://3f3efc0b4ebe.ngrok.io',
})
