import React, { useState } from 'react';
import { useRecoilState } from 'recoil'
import { useFormik } from 'formik'
import { IonModal, IonButton, IonItem, IonLabel, IonLoading, IonToast, IonSelect, IonSelectOption } from '@ionic/react';
import classnames from 'classnames'

import { registerSaleValidation } from '../../validators';
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

const RegisterSaleModal = ({ isOpen = false, handleClose }: Props) => {
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
    validationSchema: registerSaleValidation,
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
        isOpen={isSubmitting}
        message={'Salvando o venda...'}
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
            <IonSelect value={null} placeholder="Fulano de tal" onIonChange={e => console.log(e.detail.value)}>
              <IonSelectOption value={1}>Lucas Mendes</IonSelectOption>
              <IonSelectOption value={2}>Laisla Pinto Coelho</IonSelectOption>
            </IonSelect>
          </IonItem>
          {/* <span className={classnames({ 'validation-message': true, 'hide': false })}>Este campo é obrigatório</span> */}

          <IonItem className="register-sale-item">
            <IonLabel>Doce</IonLabel>
            <IonSelect value={null} placeholder="Palha Italiana" onIonChange={e => console.log(e.detail.value)}>
              {candies.map(candy => (                
                <IonSelectOption key={candy.id} value={candy.id}>{candy.name}</IonSelectOption>
              ))}
            </IonSelect>
          </IonItem>
          {/* <span className={classnames({ 'validation-message': true, 'hide': false })}>Este campo é obrigatório</span> */}

          <IonItem className="register-sale-item">
            <IonLabel>Status</IonLabel>
            <IonSelect
              interface="popover"
              placeholder="Pago"
              onIonChange={e => console.log(e.detail.value)}
              value={""}>
              <IonSelectOption value="paid">Pago</IonSelectOption>
              <IonSelectOption value="not_paid">Não pago</IonSelectOption>
            </IonSelect>
          </IonItem>
          {/* <span className={classnames({ 'validation-message': true, 'hide': false })}>Este campo é obrigatório</span> */}

          <IonItem className="register-sale-item">
            <IonLabel>Meio de pagamento</IonLabel>
            <IonSelect
              interface="popover"
              placeholder="Dinheiro"
              onIonChange={e => console.log(e.detail.value)}
              value={""}>
              <IonSelectOption value="money">Dinheiro</IonSelectOption>
              <IonSelectOption value="transfer">Transferência</IonSelectOption>
              <IonSelectOption value="scheduled">Agendado</IonSelectOption>
            </IonSelect>
          </IonItem>
          <span className={classnames({ 'validation-message': true, 'hide': false })}>Este campo é obrigatório</span>

          {/* <IonItem className="register-sale-item"> 
            <IonLabel>Preço</IonLabel>
            <IonInput
              className="candy-quantity"
              placeholder="15"
              type="number"
              value={values.price}
              onIonChange={e => setFieldValue('price', e.detail.value!)}
            />
          </IonItem>
          <span className={classnames({ 'validation-message': true, 'hide': !errors.price })}>{errors.price}</span> */}
        </div>

        <IonButton className="register-sale-btn" expand="block" color="primary" onClick={() => submit()}>
          Salvar
        </IonButton>
      </div>  
    </IonModal>
  );
}

export default RegisterSaleModal;
