import React, { useState } from 'react';
import { IonModal, IonButton, IonHeader, IonToolbar, IonTitle, IonButtons, IonText, IonItem, IonInput, IonLabel } from '@ionic/react';

import './styles.css';

interface Props {
  isOpen: boolean
  handleClose(): void
}

const RegisterCandyModal = ({ isOpen = false, handleClose }: Props) => {
  const [name, setName] = useState<string>();
  const [price, setPrice] = useState<string>();

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
        <form>
          <IonItem className="register-candy-item">
            <IonLabel>Nome</IonLabel>
            <IonInput className="input-text-right" type="text" value={name} placeholder="Palha Italiana" onIonChange={e => setName(e.detail.value!)} />
          </IonItem>

          <IonItem className="register-candy-item">
            <IonLabel>Preço</IonLabel>
            <IonInput className="candy-quantity" type="number" value={price} placeholder="15" onIonChange={e => setPrice(e.detail.value!)} />
          </IonItem>
        </form>

        <IonButton className="register-candy-btn" expand="block" color="success">Salvar</IonButton>
      </div>  

    </IonModal>
  );
}

export default RegisterCandyModal;
