import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil'
import { useFormik } from 'formik'
import { IonModal, IonButton, IonItem, IonLabel, IonLoading, IonToast, IonSelect, IonSelectOption } from '@ionic/react';
import classnames from 'classnames'

import Header from '../Header'
import { api } from '../../services/api';
import Candy from '../../interfaces/Candy';
import Customer from '../../interfaces/Customer';
import { candiesList } from '../../store/candies'
import { customersList } from '../../store/customers';
import { registerSaleValidation } from '../../validators';

import './styles.css';

interface Props {
  isOpen: boolean
  handleClose(): void
  dutyId: number
}

interface FormData {
  dutyId: number | null;
  customerId: number | null;
  candyId: number | null;
  status: "paid" | "not_paid";
  paymentMethod: "money" | "transfer" | "scheduled";
}

const RegisterSaleModal = ({ isOpen = false, handleClose, dutyId }: Props) => {
  const [candies, setCandies] = useRecoilState(candiesList) as [Candy[], (c: Candy[]) => null]
  const [customers, setCustomers] = useRecoilState(customersList) as [Customer[], (c: Customer[]) => null]

  const {
    setFieldValue,
    handleSubmit: submit,
    values,
    errors,
    resetForm,
    isSubmitting,
  } = useFormik({
    initialValues: { dutyId: Number(dutyId), candyId: null, customerId: null, status: "paid", paymentMethod: "money" },
    onSubmit: handleSubmit,
    validateOnChange: false,
    validationSchema: registerSaleValidation,
  })

  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showFailureToast, setShowFailureToast] = useState(false);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    (async () => {
      if (!candies.length) {
        setIsLoading(true)
        const { data } = await api.get<Candy[]>("/candy")
        setCandies([...data])
        setIsLoading(false)
      }
    })()
  }, [candies.length, setCandies])

  useEffect(() => {
    (async () => {
      if (!customers.length) {
        setIsLoading(true)
        const { data } = await api.get<Customer[]>('/customer')
        setCustomers([...data])
        setIsLoading(false)
      }
    })()
  }, [customers.length, setCustomers])

  async function handleSubmit (data: FormData) {
    try {
      await api.post<Candy>("/sale", data)
      resetForm()
      setShowSuccessToast(true)
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
    <IonModal cssClass="register-sale-modal" isOpen={isOpen} swipeToClose={true} onDidDismiss={handleModalDismiss}>
      <Header
        title="Cadastrar venda"
        buttons={[{
          handlerFunc: handleModalDismiss,
          slot: "primary",
          text: "Fechar",
        }]}
      />

      <IonLoading
        isOpen={isLoading}
        message={'Buscando informações...'}
        duration={5000}
      />

      <IonLoading
        isOpen={isSubmitting}
        message={'Salvando a venda...'}
        duration={5000}
      />

      <IonToast
        isOpen={showSuccessToast}
        onDidDismiss={() => setShowSuccessToast(false)}
        message="Venda salva com sucesso."
        duration={4000}
        color="success"
      />

      <IonToast
        isOpen={showFailureToast}
        onDidDismiss={() => setShowFailureToast(false)}
        message="Erro ao salvar a venda, tente novamente mais tarde."
        duration={4000}
        color="danger"
      />

      <div className="register-sale-container ion-padding-horizontal ion-padding-vertical">
        <div>
          <IonItem className="register-sale-item">
            <IonLabel>Cliente</IonLabel>
            <IonSelect value={values.customerId} placeholder="Fulano de tal" onIonChange={e => setFieldValue('customerId', Number(e.detail.value!))}>
              
              {customers.map(customer => (                
                <IonSelectOption key={customer.id} value={customer.id}>{customer.name}</IonSelectOption>
              ))}
            </IonSelect>
          </IonItem>
          <span className={classnames({ 'validation-message': true, 'hide': !errors.customerId })}>{errors.customerId}</span>

          <IonItem className="register-sale-item">
            <IonLabel>Doce</IonLabel>
            <IonSelect value={values.candyId} placeholder="Palha Italiana" onIonChange={e => setFieldValue('candyId', Number(e.detail.value!))}>
              {candies.map(candy => (                
                <IonSelectOption key={candy.id} value={candy.id}>{candy.name}</IonSelectOption>
              ))}
            </IonSelect>
          </IonItem>
          <span className={classnames({ 'validation-message': true, 'hide': !errors.candyId })}>{errors.candyId}</span>

          <IonItem className="register-sale-item">
            <IonLabel>Status</IonLabel>
            <IonSelect
              interface="popover"
              placeholder="Pago"
              onIonChange={e => setFieldValue('status', e.detail.value!)}
              value={values.status}>
              <IonSelectOption value="paid">Pago</IonSelectOption>
              <IonSelectOption value="not_paid">Não pago</IonSelectOption>
            </IonSelect>
          </IonItem>
          <span className={classnames({ 'validation-message': true, 'hide': !errors.status })}>{errors.status}</span>

          <IonItem className="register-sale-item">
            <IonLabel>Meio de pagamento</IonLabel>
            <IonSelect
              interface="popover"
              placeholder="Dinheiro"
              onIonChange={e => setFieldValue('paymentMethod', e.detail.value!)}
              value={values.paymentMethod}>
              <IonSelectOption value="money">Dinheiro</IonSelectOption>
              <IonSelectOption value="transfer">Transferência</IonSelectOption>
              <IonSelectOption value="scheduled">Agendado</IonSelectOption>
            </IonSelect>
          </IonItem>
          <span className={classnames({ 'validation-message': true, 'hide': !errors.paymentMethod })}>{errors.paymentMethod}</span>
        </div>

        <IonButton className="register-sale-btn" expand="block" color="primary" onClick={() => submit()}>
          Salvar
        </IonButton>
      </div>  
    </IonModal>
  );
}

export default RegisterSaleModal;
