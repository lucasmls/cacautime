import React from 'react';
import { Formik, useFormik } from 'formik'
import { IonModal, IonButton, IonHeader, IonToolbar, IonTitle, IonButtons, IonText, IonItem, IonInput, IonLabel, IonFooter } from '@ionic/react';
import classnames from 'classnames'

import './styles.css';
import { registerDutyValidation } from '../../validators'

interface Props {
  isOpen: boolean
  handleClose(): void
}

interface FormData {
  name: string;
  price: string;
}

const RegisterCandyModal = ({ isOpen = false, handleClose }: Props) => {
  const {
    setFieldValue, handleSubmit, values, errors,
  } = useFormik({
    initialValues: { name: '', price: '' },
    onSubmit: (data: FormData) => {console.log("submit", data)},
    validateOnChange: false,
    validationSchema: registerDutyValidation,
  })

  const handleModalDismiss = () => {
    handleClose()
    console.log("Modal closed!")
  }

  return (
    <IonModal cssClass="register-candy-modal" isOpen={isOpen} swipeToClose={true} onDidDismiss={handleModalDismiss}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Cadastrar doce</IonTitle>
          <IonButtons slot="primary" onClick={handleModalDismiss}>
            <IonButton>
              <IonText>
                Fechar
              </IonText>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

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

        <IonButton className="register-candy-btn" expand="block" color="success" onClick={() => handleSubmit()}>Salvar</IonButton>
      </div>  
    </IonModal>
  );
}

export default RegisterCandyModal;
