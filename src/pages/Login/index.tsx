import React from 'react';
import { IonPage } from '@ionic/react';

import { useAuth } from '../../hooks';

const Login = () => {
  const [auth, setAuth] = useAuth();

  return (
    <IonPage>
      <h1>Login!</h1>
      <button onClick={() => setAuth({ ...auth, token: "updated token" })}>Set token</button>
    </IonPage>
  )
}

export default Login;