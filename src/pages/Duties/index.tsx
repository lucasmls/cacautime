import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil'
import { IonContent, IonPage, IonIcon, IonItem, IonAvatar, IonLabel, IonAlert, IonLoading, IonList, IonItemSliding, IonItemOptions, IonItemOption } from '@ionic/react';
import { addOutline, medkitOutline, trashOutline } from 'ionicons/icons';

import RegisterDutyModal from '../../components/RegisterDutyModal'

import './styles.css';
import Header from '../../components/Header';
import DutiesLoader from './DutiesLoader'
import { api } from '../../services/api';
import { Duty } from '../../interfaces/Duty';
import { dutiesList } from '../../store/duties'
import { toPtBRDate } from '../../utils/date';

const Duties: React.FC = () => {
  const [duties, setDuties] = useRecoilState(dutiesList) as [Duty[], (c: Duty[]) => null]
  
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [dutyIDToBeDeleted, setDutyIDToBeDeleted] = useState(0)

  useEffect(() => {
    (async () => {
      const { data } = await api.get<Duty[]>('/duty')
      setDuties([...data])
      setIsLoading(false)
    })()
  }, [setDuties])

  const deleteDuty = async () => {
    setIsSubmitting(true)

    try {
      await api.delete(`/duty/${dutyIDToBeDeleted}`)
      setDuties(duties.filter(duty => duty.id !== dutyIDToBeDeleted)) 
    } catch (error) {
      console.log("Failed to delete the duty...")
      console.log(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDeleteDutyClick = (dutyID: number) => {
    setDutyIDToBeDeleted(dutyID)
    setShowAlert(true)
  }

  return (
    <IonPage>
      <Header
        title="Plantões"
        buttons={[{
          handlerFunc: () => setShowModal(true),
          slot: "primary",
          text: (
            <IonIcon color="dark" slot="icon-only" icon={addOutline} />
          ),
        }]}
      />

      <RegisterDutyModal isOpen={showModal} handleClose={() => setShowModal(false)} />

      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        cssClass='my-custom-class'
        header={'Perigo!'}
        message={'Tem certeza que deseja <strong>excluir permanentemente</strong> este plantão??'}
        buttons={[
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              setDutyIDToBeDeleted(0)
            }
          },
          {
            text: 'Excluir',
            handler: async () => {
              await deleteDuty()
            }
          }
        ]}
      />

      <IonLoading
        isOpen={isSubmitting}
        message={'Excluindo plantão...'}
        duration={5000}
      />

        <IonContent className="ion-padding-horizontal ion-padding-vertical">
          {isLoading ? (
            <DutiesLoader />
          ) : (
            <IonList>
              {duties.map(duty => (
                <IonItemSliding key={String(duty.id)}>
                  <IonItemOptions side="end">
                    <IonItemOption color="danger" onClick={() => handleDeleteDutyClick(duty.id)}>
                      <IonIcon slot="icon-only" icon={trashOutline} />
                    </IonItemOption>
                  </IonItemOptions>

                  <IonItem className="duty-item" key={String(duty.id)}>
                    <IonAvatar slot="start">
                      <div className="duty-item-icon">
                        <IonIcon icon={medkitOutline} size="large" />
                      </div>
                    </IonAvatar>
                    <IonLabel>
                      <h3>Plantão dia: <b>{toPtBRDate(new Date(duty.date))}</b></h3>
                      <p>Doces levados: <b>{duty.candyQuantity}</b></p>
                    </IonLabel>
                  </IonItem>
                </IonItemSliding>
              ))}
            </IonList>
          )}
        <br/>
      </IonContent>
    </IonPage>
  );
};

export default Duties;
