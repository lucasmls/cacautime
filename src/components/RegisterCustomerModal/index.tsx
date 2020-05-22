import React, { useState } from 'react';
import { useRecoilState } from 'recoil'
import { useFormik } from 'formik'
import { IonModal, IonButton, IonHeader, IonToolbar, IonTitle, IonButtons, IonText, IonItem, IonInput, IonLabel, IonLoading, IonToast } from '@ionic/react';
import classnames from 'classnames'

import { registerCustomerValidation } from '../../validators'
import Customer from '../../interfaces/Customer';
import { customersList } from '../../store/customers'
import './styles.css';
import { api } from '../../services/api';

interface Props {
  isOpen: boolean
  handleClose(): void
}

interface FormData {
  name: string;
  phone: string;
}

const RegisterCustomerModal = ({ isOpen = false, handleClose }: Props) => {
  const [customers, setCustomers] = useRecoilState(customersList) as [Customer[], (c: Customer[]) => null]

  const {
    setFieldValue,
    handleSubmit: submit,
    values,
    errors,
    resetForm,
    isSubmitting,
  } = useFormik({
    initialValues: { name: '', phone: '' },
    onSubmit: handleSubmit,
    validateOnChange: false,
    validationSchema: registerCustomerValidation,
  })

  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showFailureToast, setShowFailureToast] = useState(false);

  async function handleSubmit(data: FormData) {
    try {
      const { data: customer } = await api.post<Customer>("/customer", data)
      resetForm()
      setShowSuccessToast(true)
      setCustomers([...customers, customer])
    } catch (error) {
      console.error(error)
      setShowFailureToast(true)
    }
  }

  const handleModalDismiss = () => {
    handleClose()
    resetForm()
  }

  return (
    <IonModal cssClass="register-customer-modal" isOpen={isOpen} swipeToClose={true} onDidDismiss={handleModalDismiss}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Cadastrar cliente</IonTitle>
          <IonButtons slot="primary" onClick={handleModalDismiss}>
            <IonButton>
              <IonText>
                Fechar
              </IonText>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonLoading
        isOpen={isSubmitting}
        message={'Salvando o novo cliente...'}
        duration={5000}
      />

      <IonToast
        isOpen={showSuccessToast}
        onDidDismiss={() => setShowSuccessToast(false)}
        message="Cliente cadastrado com sucesso."
        duration={4000}
        color="success"
      />

      <IonToast
        isOpen={showFailureToast}
        onDidDismiss={() => setShowFailureToast(false)}
        message="Erro ao cadastrar o cliente, tente novamente mais tarde."
        duration={4000}
        color="danger"
      />

      <div className="register-customer-container ion-padding-horizontal ion-padding-vertical">
        <form>
          <IonItem className="register-customer-item">
            <IonLabel>Nome</IonLabel>
            <IonInput className="input-text-right" type="text" value={values.name} placeholder="José Silva" onIonChange={e => setFieldValue('name', e.detail.value!)} />
          </IonItem>
          <span className={classnames({ 'validation-message': true, 'hide': !errors.name })}>{errors.name}</span>

          <IonItem className="register-customer-item">
            <IonLabel>Telefone</IonLabel>
            <IonInput className="input-text-right" type="tel" value={values.phone} placeholder="(31) 90000-0000" onIonChange={e => setFieldValue('phone', e.detail.value!)} />
          </IonItem>
          <span className={classnames({ 'validation-message': true, 'hide': !errors.phone })}>{errors.phone}</span>
        </form>

        <IonButton className="register-customer-btn" expand="block" color="primary" onClick={() => submit()}>
          Salvar
        </IonButton>
      </div>  

    </IonModal>
  );
}

export default RegisterCustomerModal;
