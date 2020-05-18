import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon } from '@ionic/react';
import { addOutline } from 'ionicons/icons';
import './styles.css';

const Customers: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Clientes</IonTitle>
          <IonButtons slot="primary" onClick={() => setShowModal(true)}>
            <IonButton>
              <IonIcon color="dark" slot="icon-only" icon={addOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding-horizontal">
      </IonContent>
    </IonPage>
  );
};

export default Customers;
