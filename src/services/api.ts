import axios from 'axios';

export const api = axios.create({
  // @TODO => Add into .env
  baseURL: 'https://67acd70e043c.ngrok.io/',
})
