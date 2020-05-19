import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon, IonItem, IonAvatar, IonLabel, IonList, IonListHeader, IonSkeletonText, IonThumbnail } from '@ionic/react';
// import { addOutline } from 'ionicons/icons';

// import RegisterCandyModal from '../../components/RegisterCandyModal'
import CandiesLoader from './CandiesLoader'

import './styles.css';

const Candies: React.FC = () => {
  // const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500)
  }, [])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Doces</IonTitle>
          {/* <IonButtons slot="primary" onClick={() => setShowModal(true)}>
            <IonButton>
              <IonIcon color="dark" slot="icon-only" icon={addOutline} />
            </IonButton>
          </IonButtons> */}
        </IonToolbar>
      </IonHeader>

      {/* <RegisterCandyModal isOpen={showModal} handleClose={() => setShowModal(false)} /> */}

      <IonContent className="ion-padding-horizontal ion-padding-vertical">
        {isLoading ? (
          <CandiesLoader />
        ) : (
          <IonList>
            <IonItem className="candy-item">
              <IonAvatar slot="start">
                <img alt="Candy" src="https://image.flaticon.com/icons/svg/2913/2913712.svg" />
              </IonAvatar>
              <IonLabel>
                <h3>Palha Italiana  - <b>Ninho</b></h3>
                <p>$5,00</p>
              </IonLabel>
            </IonItem>
            <IonItem className="candy-item">
              <IonAvatar slot="start">
                <img alt="Candy" src="https://image.flaticon.com/icons/svg/2913/2913712.svg" />
              </IonAvatar>
              <IonLabel>
                <h3>Palha Italiana  - <b>Doce de Leite</b></h3>
                <p>$5,00</p>
              </IonLabel>
            </IonItem>
            <IonItem className="candy-item">
              <IonAvatar slot="start">
                <img alt="Candy" src="https://image.flaticon.com/icons/svg/2913/2913712.svg" />
              </IonAvatar>
              <IonLabel>
                <h3>Palha Italiana  - <b>Brigadeiro</b></h3>
                <p>$5,00</p>
              </IonLabel>
            </IonItem>
            <IonItem className="candy-item">
              <IonAvatar slot="start">
                <img alt="Candy" src="https://image.flaticon.com/icons/svg/2913/2913712.svg" />
              </IonAvatar>
              <IonLabel>
                <h3>Bolo no Pote  - <b>Ninho</b></h3>
                <p>$5,00</p>
              </IonLabel>
            </IonItem>
            <IonItem className="candy-item">
              <IonAvatar slot="start">
                <img alt="Candy" src="https://image.flaticon.com/icons/svg/2913/2913712.svg" />
              </IonAvatar>
              <IonLabel>
                <h3>Bolo no Pote  - <b>Morango</b></h3>
                <p>$5,00</p>
              </IonLabel>
            </IonItem>
            <IonItem className="candy-item">
              <IonAvatar slot="start">
                <img alt="Candy" src="https://image.flaticon.com/icons/svg/2913/2913712.svg" />
              </IonAvatar>
              <IonLabel>
                <h3>Bolo no Pote  - <b>Brigadeiro</b></h3>
                <p>$5,00</p>
              </IonLabel>
            </IonItem>
          </IonList>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Candies;


