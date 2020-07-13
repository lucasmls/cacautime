import { Dispatch } from 'react';
import { useLocalStorage } from './useLocalStorage';

interface Auth {
  isSignedIn: boolean
  token: string
}

export function useAuth(): [Auth, Dispatch<Auth>] {
  const [token, setToken] = useLocalStorage('@auth/token', '');

  const setItem = ({ token: jwt }: Auth) => {
    setToken(jwt);
  };

  return [
    { isSignedIn: Boolean(token), token },
    setItem
  ]
}