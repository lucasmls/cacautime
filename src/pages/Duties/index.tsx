import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil'
import { IonContent, IonPage, IonText, IonIcon } from '@ionic/react';
import { addOutline } from 'ionicons/icons';

import SalesTable from '../../components/SalesTable'
import ResultTable from '../../components/ResultsTable'
import RegisterDutyModal from '../../components/RegisterDutyModal'

import './styles.css';
import Header from '../../components/Header';
import DutiesLoader from './DutiesLoader'
import { api } from '../../services/api';
import { ConsolidatedDuty } from '../../interfaces/Duty';
import { consolidatedDutiesList } from '../../store/duties'
import { toPtBRDate } from '../../utils/date';

const Duties: React.FC = () => {
  const [consolidatedDuties, setConsolidatedDuties] = useRecoilState(consolidatedDutiesList) as [ConsolidatedDuty[], (c: ConsolidatedDuty[]) => null]
  
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    (async () => {
      const { data } = await api.get<ConsolidatedDuty[]>('/duty/sales')
      setConsolidatedDuties([...data])
      setIsLoading(false)
    })()
  }, [setConsolidatedDuties])

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
              {consolidatedDuties.map(duty => (
                <div className="duty" key={duty.id}>
                  <IonText color="dark">
                    <h4>Plantão {toPtBRDate(new Date(duty.date))} - ({duty.sales.length}/{duty.quantity}) Doces</h4>
                  </IonText>
                  <SalesTable sales={duty.sales} />
                  <ResultTable subTotal={duty.subtotal} paidAmount={duty.paid_amount} scheduledAmount={duty.scheduled_amount} />
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
