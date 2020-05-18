import React, { useState } from 'react';
import { IonModal, IonButton, IonHeader, IonToolbar, IonTitle, IonButtons, IonText, IonItem, IonInput, IonLabel, IonDatetime } from '@ionic/react';

import './styles.css';

interface Props {
  isOpen: boolean
  handleClose(): void
}

const RegisterCustomerModal = ({ isOpen = false, handleClose }: Props) => {
  const [name, setName] = useState<string>();
  const [phone, setPhone] = useState<string>();

  const handleModalDismiss = () => {
    handleClose()
    console.log("Modal closed!")
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

      <div className="register-customer-container ion-padding-horizontal ion-padding-vertical">
        <form>
          <IonItem className="register-customer-item">
            <IonLabel>Nome</IonLabel>
            <IonInput className="input-text-right" type="text" value={name} placeholder="José Silva" onIonChange={e => setName(e.detail.value!)} />
          </IonItem>

          <IonItem className="register-customer-item">
            <IonLabel>Telefone</IonLabel>
            <IonInput className="input-text-right" type="tel" value={phone} placeholder="(31) 90000-0000" onIonChange={e => setPhone(e.detail.value!)} />
          </IonItem>
        </form>

        <IonButton className="register-customer-btn" expand="block" color="success">Salvar</IonButton>
      </div>  

    </IonModal>
  );
}

export default RegisterCustomerModal;
