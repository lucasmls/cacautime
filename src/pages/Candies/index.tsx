import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil'
import { addOutline } from 'ionicons/icons';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonItem,
  IonAvatar,
  IonLabel,
  IonList
} from '@ionic/react';

import CandiesLoader from './CandiesLoader'
import RegisterCandyModal from '../../components/RegisterCandyModal'
import { candiesList } from '../../store/candies'
import { api } from '../../services/api'
import { toBRL } from '../../utils/money'

import './styles.css';
import Candy from '../../interfaces/Candy';

const Candies: React.FC = () => {
  const [candies, setCandies] = useRecoilState(candiesList) as [Candy[], (c: Candy[]) => null]

  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    (async () => {
      const { data } = await api.get<Candy[]>("/candy")
      setCandies([...data])
      setIsLoading(false)
    })()
  }, [setCandies])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Doces</IonTitle>
          <IonButtons slot="primary" onClick={() => setShowModal(true)}>
            <IonButton>
              <IonIcon color="dark" slot="icon-only" icon={addOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <RegisterCandyModal isOpen={showModal} handleClose={() => setShowModal(false)} />

      <IonContent className="ion-padding-horizontal ion-padding-vertical">
        {isLoading ? (
          <CandiesLoader />
        ) : (
          <IonList>
            {candies.map(candy => (
              <IonItem className="candy-item" key={String(candy.id)}>
                <IonAvatar slot="start">
                  <img alt="Candy" src="https://image.flaticon.com/icons/svg/2913/2913712.svg" />
                </IonAvatar>
                <IonLabel>
                  <h3>{candy.name}</h3>
                  <p>{toBRL(candy.price)}</p>
                </IonLabel>
              </IonItem>
            ))}
          </IonList>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Candies;


