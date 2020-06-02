import React, { useState } from 'react';
import { useRecoilState } from 'recoil'
import { useFormik } from 'formik'
import { IonModal, IonButton, IonItem, IonInput, IonLabel, IonLoading, IonToast } from '@ionic/react';
import classnames from 'classnames'

import { registerCandyValidation } from '../../validators'
import { sanitizePrice } from '../../utils/money';
import { api } from '../../services/api';
import { candiesList } from '../../store/candies'
import Candy from '../../interfaces/Candy';
import Header from '../Header'

import './styles.css';
interface Props {
  isOpen: boolean
  handleClose(): void
}

interface FormData {
  name: string;
  price: string;
}

const RegisterCandyModal = ({ isOpen = false, handleClose }: Props) => {
  const [candies, setCandies] = useRecoilState(candiesList) as [Candy[], (c: Candy[]) => null]

  const {
    setFieldValue,
    handleSubmit: submit,
    values,
    errors,
    resetForm,
    isSubmitting,
  } = useFormik({
    initialValues: { name: '', price: '' },
    onSubmit: handleSubmit,
    validateOnChange: false,
    validationSchema: registerCandyValidation,
  })

  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showFailureToast, setShowFailureToast] = useState(false);

  async function handleSubmit (data: FormData) {
    const payload = {
      ...data,
      price: sanitizePrice(data.price)
    }

    try {
      const { data: candy } = await api.post<Candy>("/candy", payload)
      resetForm()
      setShowSuccessToast(true)
      setCandies([...candies, candy])
    } catch (error) {
      console.error(error)
      setShowFailureToast(true)
    }
  }

  function handleModalDismiss () {
    handleClose()
    resetForm()
  }

  return (
    <IonModal cssClass="register-candy-modal" isOpen={isOpen} swipeToClose={true} onDidDismiss={handleModalDismiss}>
      <Header
        title="Cadastrar doce"
        buttons={[{
          handlerFunc: handleModalDismiss,
          slot: "primary",
          text: "Fechar",
        }]}
      />

      <IonLoading
        isOpen={isSubmitting}
        message={'Salvando o doce...'}
        duration={5000}
      />

      <IonToast
        isOpen={showSuccessToast}
        onDidDismiss={() => setShowSuccessToast(false)}
        message="Doce cadastrado com sucesso."
        duration={4000}
        color="success"
      />

      <IonToast
        isOpen={showFailureToast}
        onDidDismiss={() => setShowFailureToast(false)}
        message="Erro ao cadastrar o doce, tente novamente mais tarde."
        duration={4000}
        color="danger"
      />

      <div className="register-candy-container ion-padding-horizontal ion-padding-vertical">
        <div>
          <IonItem className="register-candy-item">
            <IonLabel>Nome</IonLabel>
            <IonInput
              className="input-text-right"
              placeholder="Palha Italiana"
              type="text"
              value={values.name}
              onIonChange={e => setFieldValue('name', e.detail.value!)} />
          </IonItem>
          <span className={classnames({ 'validation-message': true, 'hide': !errors.name })}>{errors.name}</span>

          <IonItem className="register-candy-item"> 
            <IonLabel>Preço</IonLabel>
            <IonInput
              className="candy-quantity"
              placeholder="15"
              type="number"
              value={values.price}
              onIonChange={e => setFieldValue('price', e.detail.value!)} />
          </IonItem>
          <span className={classnames({ 'validation-message': true, 'hide': !errors.price })}>{errors.price}</span>
        </div>

        <IonButton className="register-candy-btn" expand="block" color="primary" onClick={() => submit()}>
          Salvar
        </IonButton>
      </div>  
    </IonModal>
  );
}

export default RegisterCandyModal;
