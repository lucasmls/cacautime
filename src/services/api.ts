import axios from 'axios';

export const api = axios.create({
  // @TODO => Add into .env
  // baseURL: 'http://localhost:3000',
  baseURL: 'https://bffd6b9eacba.ngrok.io',
})
