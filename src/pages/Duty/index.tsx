import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { IonPage, IonHeader, IonToolbar, IonButtons, IonContent, IonBackButton, IonTitle, IonFooter, IonText } from '@ionic/react';

import ResultsTable from '../../components/ResultsTable'
import SalesTable from '../../components/SalesTable'

import './styles.css'
import { ConsolidatedDuty } from '../../interfaces/Duty';
import { api } from '../../services/api';
import { toPtBRDate } from '../../utils/date';

const Duty = () => {
  const { id } = useParams();
  const [duty, setDuty] = useState() as [ConsolidatedDuty, (c: ConsolidatedDuty) => null]

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    (async () => {
      const { data } = await api.get<ConsolidatedDuty>(`duty/${id}/sales`)
      setDuty(data)
      setIsLoading(false)
    })()
  }, [id, setDuty])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="Voltar" />
          </IonButtons>

          <IonTitle>Vendas</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding-horizontal ion-padding-vertical">
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          <>
            <div slot="fixed" className="duty-detail-heading ion-padding-vertical ion-padding-horizontal">
              <IonText color="dark">
                <b>Data do plantão: </b>
                <span>
                  {(duty && toPtBRDate(new Date(duty.date))) || ""}
                </span>
              </IonText>
              <br/>
              <IonText color="dark">
                <b>Total de doces levados: </b> <span>{duty?.quantity}</span>
              </IonText>
            </div>

            <div style={{ marginTop: "70px" }}>
              <SalesTable sales={duty?.sales || []} />
            </div>
          </>
        )}
      </IonContent>

      <IonFooter>
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          <IonToolbar className="footer-toolbar">
            <div className="results-table-container">
              <ResultsTable
                subTotal={duty?.subtotal}
                paidAmount={duty?.paidAmount}
                scheduledAmount={duty?.scheduledAmount}
              />
            </div>
          </IonToolbar>
        )}
      </IonFooter>
    </IonPage>
  );
}

export default Duty;