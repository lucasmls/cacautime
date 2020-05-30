import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil'
import { addOutline, trashOutline } from 'ionicons/icons';
import {
  IonContent,
  IonPage,
  IonIcon,
  IonItem,
  IonAvatar,
  IonLabel,
  IonList,
  IonAlert,
  IonLoading,
  IonItemSliding,
  IonItemOptions,
  IonItemOption
} from '@ionic/react';

import CandiesLoader from './CandiesLoader'
import RegisterCandyModal from '../../components/RegisterCandyModal'
import Header from '../../components/Header'
import { candiesList } from '../../store/candies'
import { api } from '../../services/api'
import { toBRL } from '../../utils/money'

import './styles.css';
import Candy from '../../interfaces/Candy';

const Candies: React.FC = () => {
  const [candies, setCandies] = useRecoilState(candiesList) as [Candy[], (c: Candy[]) => null]

  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [candyIDToBeDeleted, setCandyIDToBeDeleted] = useState(0)

  useEffect(() => {
    (async () => {
      const { data } = await api.get<Candy[]>("/candy")
      setCandies([...data])
      setIsLoading(false)
    })()
  }, [setCandies])

  const deleteCandy = async () => {
    setIsSubmitting(true)

    try {
      await api.delete(`/candy/${candyIDToBeDeleted}`)
      setCandies(candies.filter(candy => candy.id !== candyIDToBeDeleted)) 
    } catch (error) {
      console.log("Failed to delete the candy...")
      console.log(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDeleteCandyClick = (candyID: number) => {
    setCandyIDToBeDeleted(candyID)
    setShowAlert(true)
  }

  return (
    <IonPage>
      <Header
        title="Doces"
        buttons={[{
          handlerFunc: () => setShowModal(true),
          slot: "primary",
          text: (
            <IonIcon color="dark" slot="icon-only" icon={addOutline} />
          ),
        }]}
      />

      <RegisterCandyModal isOpen={showModal} handleClose={() => setShowModal(false)} />

      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        cssClass='my-custom-class'
        header={'Perigo!'}
        message={'Tem certeza que deseja <strong>excluir permanentemente</strong> este doce??'}
        buttons={[
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              setCandyIDToBeDeleted(0)
            }
          },
          {
            text: 'Excluir',
            handler: async () => {
              await deleteCandy()
            }
          }
        ]}
      />

      <IonLoading
        isOpen={isSubmitting}
        message={'Excluindo doce...'}
        duration={5000}
      />

      <IonContent className="ion-padding-horizontal ion-padding-vertical">
        {isLoading ? (
          <CandiesLoader />
        ) : (
          <IonList>
            {candies.map(candy => (
              <IonItemSliding key={String(candy.id)}>
                <IonItemOptions side="end">
                  <IonItemOption color="danger" onClick={() => handleDeleteCandyClick(candy.id)}>
                    <IonIcon slot="icon-only" icon={trashOutline} />
                  </IonItemOption>
                </IonItemOptions>

                <IonItem className="candy-item" key={String(candy.id)}>
                  <IonAvatar slot="start">
                    <img alt="Candy" src="https://image.flaticon.com/icons/svg/2913/2913712.svg" />
                  </IonAvatar>
                  <IonLabel>
                    <h3>{candy.name}</h3>
                    <p>{toBRL(candy.price)}</p>
                  </IonLabel>
                </IonItem>
              </IonItemSliding>
            ))}
          </IonList>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Candies;


