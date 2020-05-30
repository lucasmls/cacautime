import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil'
import { IonContent, IonPage, IonIcon, IonItem, IonAvatar, IonLabel } from '@ionic/react';
import { addOutline, medkitOutline } from 'ionicons/icons';

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
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    (async () => {
      const { data } = await api.get<Duty[]>('/duty')
      setDuties([...data])
      setIsLoading(false)
    })()
  }, [setDuties])

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

      <IonContent className="ion-padding-horizontal">
          {isLoading ? (
            <DutiesLoader />
          ) : (
            <>
              {duties.map(duty => (
                <div className="duty" key={duty.id}>
                  <IonItem className="customer-item" key={String(duty.id)}>
                    <IonAvatar slot="start">
                      <div className="duty-item">
                        <IonIcon icon={medkitOutline} size="large" />
                      </div>
                    </IonAvatar>
                    <IonLabel>
                      <h3>Plantão dia: <b>{toPtBRDate(new Date(duty.date))}</b></h3>
                      <p>Doces levados: <b>{duty.candyQuantity}</b></p>
                    </IonLabel>
                  </IonItem>
                </div>
              ))}
            </>
          )}
        <br/>
      </IonContent>
    </IonPage>
  );
};

export default Duties;
