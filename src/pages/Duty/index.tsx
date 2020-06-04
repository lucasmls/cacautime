import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useParams } from 'react-router';
import debounce from 'lodash.debounce';
import { IonPage, IonToolbar, IonContent, IonBackButton, IonFooter, IonText, IonIcon } from '@ionic/react';

import ResultsTable from '../../components/ResultsTable'
import SalesTable from '../../components/SalesTable'
import LoadingDuty from './DutyLoader'

import './styles.css'
import { ConsolidatedDuty, Sale } from '../../interfaces/Duty';
import { api } from '../../services/api';
import { toPtBRDate } from '../../utils/date';
import { addOutline } from 'ionicons/icons';
import RegisterSaleModal from '../../components/RegisterSaleModal';
import Header from '../../components/Header';

const Duty = () => {
  const { id } = useParams();
  const [duty, setDuty] = useState() as [ConsolidatedDuty, (c: ConsolidatedDuty) => null]

  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    (async () => {
      const { data } = await api.get<ConsolidatedDuty>(`duty/${id}/sales`)
      setDuty(data)
      setIsLoading(false)
    })()
  }, [id, setDuty])

  const updateDutySale = useCallback(
    debounce(async (sale: Sale) => {
      await api.put<Sale>(`sale/${sale.id}`, sale)
    }, 500),
    [],
  )

  const updateSales = (updatedSales: Sale[], updatedSale: Sale) => {
    setDuty({...duty, sales: updatedSales})
    updateDutySale(updatedSale)
  }

  return (
    <IonPage>
      <Header
        title="Vendas"
        buttons={[
          {
            handlerFunc: () => null,
            slot: "start",
            text: (
              <IonBackButton text="Voltar" />
            ),
          },
          {
            handlerFunc: () => setShowModal(true),
            slot: "primary",
            text: (
              <IonIcon color="dark" slot="icon-only" icon={addOutline} />
            ),
          }
        ]}
      />

      <RegisterSaleModal isOpen={showModal} handleClose={() => setShowModal(false)} dutyId={id} />

      <IonContent className="ion-padding-horizontal ion-padding-vertical">
        {isLoading ? (
          <LoadingDuty />
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
              <SalesTable sales={duty?.sales || []} updateSales={updateSales} />
            </div>
          </>
        )}
      </IonContent>

      <IonFooter>
        {!isLoading && (
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