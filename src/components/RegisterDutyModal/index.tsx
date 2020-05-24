import React, { useState } from 'react';
import { useFormik } from 'formik';
import { IonModal, IonButton, IonItem, IonInput, IonLabel, IonDatetime, IonLoading, IonToast } from '@ionic/react';
import classnames from 'classnames'

import Header from '../Header'
import { registerDutyValidation } from '../../validators'
import { toEnUSDate } from '../../utils/date'
import { Duty } from '../../interfaces/Duty'
import { api } from '../../services/api';

import './styles.css';

interface Props {
  isOpen: boolean
  handleClose(): void
}

interface FormData {
  date: string;
  quantity: number;
}

const RegisterDutyModal = ({ isOpen = false, handleClose }: Props) => {
  const {
    setFieldValue,
    handleSubmit: submit,
    values,
    errors,
    resetForm,
    isSubmitting,
  } = useFormik({
    initialValues: { date: toEnUSDate(new Date()), quantity: 1 },
    onSubmit: handleSubmit,
    validateOnChange: false,
    validationSchema: registerDutyValidation,
  })

  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showFailureToast, setShowFailureToast] = useState(false);

  async function handleSubmit(data: FormData) {
    try {
      await api.post<Duty>("/duty", data)
      resetForm()
      setShowSuccessToast(true)
    } catch (error) {
      console.error(error)
      setShowFailureToast(true)
    }
  }

  const handleModalDismiss = () => {
    handleClose()
    console.log("Modal closed!")
  }

  return (
    <IonModal isOpen={isOpen} swipeToClose={true} onDidDismiss={handleModalDismiss} cssClass="register-duty-modal">
      <Header
        title="Cadastrar plantão"
        buttons={[{
          handlerFunc: handleModalDismiss,
          slot: "primary",
          text: "Fechar",
        }]}
      />

      <IonLoading
        isOpen={isSubmitting}
        message={'Salvando o novo plantão...'}
        duration={5000}
      />

      <IonToast
        isOpen={showSuccessToast}
        onDidDismiss={() => setShowSuccessToast(false)}
        message="Plantão cadastrado com sucesso."
        duration={4000}
        color="success"
      />

      <IonToast
        isOpen={showFailureToast}
        onDidDismiss={() => setShowFailureToast(false)}
        message="Erro ao cadastrar o plantão, tente novamente mais tarde."
        duration={4000}
        color="danger"
      />

      <div className="ion-padding-horizontal ion-padding-vertical register-duty-container">
        <form>
          <IonItem className="register-duty-item">
            <IonLabel>Data do plantão</IonLabel>
            <IonDatetime displayFormat="DD/MM/YYYY" pickerFormat="DD/MM/YYYY" placeholder="05/05/2020" value={values.date} onIonChange={e => setFieldValue("date", e.detail.value!.split("T")[0])}></IonDatetime>
          </IonItem>
          <span className={classnames({ 'validation-message': true, 'hide': !errors.date })}>{errors.date}</span>

          <IonItem className="register-duty-item">
            <IonLabel>Quantidade de Doces</IonLabel>
            <IonInput className="candy-quantity" type="number" value={values.quantity} placeholder="15" onIonChange={e => setFieldValue("quantity", parseInt(e.detail.value!))} />
          </IonItem>
          <span className={classnames({ 'validation-message': true, 'hide': !errors.quantity })}>{errors.quantity}</span>
        </form>

        <IonButton className="register-duty-btn" expand="block" color="primary" onClick={() => submit()}>Salvar</IonButton>
      </div>

    </IonModal>
  );
}

export default RegisterDutyModal;