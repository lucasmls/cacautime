import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IonButton, IonInput, IonItem, IonLabel, IonPage, IonSpinner, IonToast } from '@ionic/react';
import classnames from 'classnames'

import { useAuth } from '../../hooks';

import './styles.css'
import { useFormik } from 'formik';
import { api } from '../../services/api';
import { loginValidation } from '../../validators'

interface FormData {
  username: string;
  password: string;
}

interface LoginReponse {
  token: string
}


const Login = () => {
  const [, setAuth] = useAuth();
  const history = useHistory();

  const {
    setFieldValue,
    handleSubmit: submit,
    values,
    errors,
    resetForm,
    isSubmitting,
  } = useFormik({
    initialValues: { username: '', password: '' },
    onSubmit: handleSubmit,
    validateOnChange: false,
    validationSchema: loginValidation,
  })

  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showFailureToast, setShowFailureToast] = useState(false);

  async function handleSubmit (data: FormData) {
    const tempPayload = { password: data.password, email: data.username }
    try {
      const { data: { token } } = await api.post<LoginReponse>("/login", tempPayload)
      resetForm()
      setShowSuccessToast(true)

      setAuth({ token, isSignedIn: true })
      history.push('/months');
    } catch (error) {
      console.error(error)
      setShowFailureToast(true)
    }
  }

  return (
    <IonPage className="login-page ion-padding">
      <IonToast
        isOpen={showSuccessToast}
        onDidDismiss={() => setShowSuccessToast(false)}
        message="Login efetuado com sucesso."
        duration={4000}
        color="success"
      />

      <IonToast
        isOpen={showFailureToast}
        onDidDismiss={() => setShowFailureToast(false)}
        message="Usuário ou senha invalidos"
        duration={4000}
        color="danger"
      />

      <img
        className="cacau-logo"
        alt=""
        src="https://instagram.fplu9-1.fna.fbcdn.net/v/t51.2885-19/s150x150/95819673_1166153667064099_7081594411821301760_n.jpg?_nc_ht=instagram.fplu9-1.fna.fbcdn.net&_nc_ohc=LQ0Khp5xCJYAX-vADuj&oh=19dd36575b83493e9c200d60648101e4&oe=5F6FBEE3"
      />

      <IonItem className="ion-no-padding">
        <IonLabel>Usuário</IonLabel>
        <IonInput
          type="text"
          name="username"
          value={values.username}
          onIonChange={e => setFieldValue('username', e.detail.value!)}
        />
      </IonItem>
      <span className={classnames({ 'validation-message': true, 'hide': !errors.username })}>{errors.username}</span>

      <IonItem className="ion-no-padding">
        <IonLabel>Senha</IonLabel>
        <IonInput
          type="password"
          name="password"
          value={values.password}
          onIonChange={e => setFieldValue('password', e.detail.value!)}
        />
      </IonItem>
      <span className={classnames({ 'validation-message': true, 'hide': !errors.password })}>{errors.password}</span>

      <IonButton
        className="ion-no-padding ion-no-margin ion-margin-top submit-btn"
        expand="full"
        onClick={() => submit()}
      >
        {isSubmitting ? <IonSpinner name="dots" /> : "Entrar"}
      </IonButton>
    </IonPage>
  )
}

export default Login;