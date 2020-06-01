import React from 'react';
import { useParams } from 'react-router';
import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonContent } from '@ionic/react';

const Duty: React.FC = () => {
  const { id } = useParams();

  console.log(`Fetch sales of duty with id: ${id}`)

  return (
    <IonPage>
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, officia.</p>
        <h2>{id}</h2>
      </IonContent>
    </IonPage>
  );
}

export default Duty;