import React, { useState } from 'react';
import { IonModal, IonButton, IonHeader, IonToolbar, IonTitle, IonButtons, IonText, IonItem, IonInput, IonLabel, IonDatetime } from '@ionic/react';

import './styles.css';

interface Props {
  isOpen: boolean
  handleClose(): void
}

const RegisterDutyModal = ({ isOpen = false, handleClose }: Props) => {
  const [date, setDate] = useState<string>();
  const [quantity, setQuantity] = useState<number>();

  const handleModalDismiss = () => {
    handleClose()
    console.log("Modal closed!")
  }

  return (
    <IonModal isOpen={isOpen} swipeToClose={true} onDidDismiss={handleModalDismiss} cssClass="register-duty-modal">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Cadastrar plantão</IonTitle>
          <IonButtons slot="primary" onClick={handleModalDismiss}>
            <IonButton>
              <IonText>
                Fechar
              </IonText>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <div className="ion-padding-horizontal ion-padding-vertical register-duty-container">
        <form>
          <IonItem className="register-duty-item">
            <IonLabel>Data do plantão</IonLabel>
            <IonDatetime displayFormat="DD/MM/YYYY" placeholder="05/05/2020" value={date} onIonChange={e => setDate(e.detail.value!.split("T")[0])}></IonDatetime>
          </IonItem>

          <IonItem className="register-duty-item">
            <IonLabel>Quantidade de Doces</IonLabel>
            <IonInput className="candy-quantity" type="number" value={quantity} placeholder="15" onIonChange={e => setQuantity(parseInt(e.detail.value!, 10))} />
          </IonItem>
        </form>

        <IonButton className="register-duty-btn" expand="block" color="success">Salvar</IonButton>
      </div>

    </IonModal>
  );
}

export default RegisterDutyModal;