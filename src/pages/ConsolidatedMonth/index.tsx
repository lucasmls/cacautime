import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router';
import debounce from 'lodash.debounce';
import { IonPage, IonToolbar, IonContent, IonBackButton, IonFooter, IonText, IonIcon } from '@ionic/react';

import ResultsTable from '../../components/ResultsTable';
import SalesTable from '../../components/SalesTable';
import LoadingConsolidatedMonth from './ConsolidatedMonthLoader';
import RegisterSaleModal from '../../components/RegisterSaleModal';
import Header from '../../components/Header';

import { ConsolidatedMonth, Sale } from '../../interfaces/Month';
import { api } from '../../services/api';
import { addOutline } from 'ionicons/icons';

import './styles.css';

interface Result {
  subtotal: number,
  paidAmount: number
  scheduledAmount: number,
}

interface RouteParams {
  id: string,
  month: "01" | "02" | "03" | "04" | "05" | "06" | "07" | "08" | "09" | "10" | "11" | "12",
  year: string,
}

const ConsolidatedMonthPage = () => {
  const { id, month, year } = useParams<RouteParams>();
  const [consolidatedMonth, setConsolidatedMonth] = useState() as [ConsolidatedMonth, (c: ConsolidatedMonth) => null]

  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get<ConsolidatedMonth>(`sale/${month}/${year}`)
        setConsolidatedMonth(data)
        setIsLoading(false)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [id, month, setConsolidatedMonth, year])

  const calculateConsolidatedMonthResult = (sales: Sale[]): Result => {
    const result = sales.reduce((acc, sale) => {
      const subtotal = acc.subtotal + sale.candyPrice

      let paidAmount = acc.paidAmount
      if (sale.status === "paid") {
        paidAmount += sale.candyPrice
      }

      let scheduledAmount = acc.scheduledAmount
      if (sale.status === "not_paid") {
        scheduledAmount += sale.candyPrice
      }

      return {
        ...acc,
        subtotal,
        paidAmount,
        scheduledAmount,
      }
    }, { subtotal: 0, paidAmount: 0, scheduledAmount: 0 } as Result)

    return result
  }

  const updateConsolidatedMonthSale = useCallback(
    debounce(async (updatedSale: Sale) => {
      await api.put<Sale>(`sale/${updatedSale.id}`, updatedSale)
    }, 500),
    [],
  )

  const updateSales = (updatedSales: Sale[], updatedSale: Sale) => {
    const updatedConsolidatedMonth = { ...consolidatedMonth, ...calculateConsolidatedMonthResult(updatedSales), sales: updatedSales }

    setConsolidatedMonth(updatedConsolidatedMonth)
    updateConsolidatedMonthSale(updatedSale)
  }

  const monthsTranslationMap = {
    "01": "Janeiro",
    "02": "Fevereiro",
    "03": "Março",
    "04": "Abril",
    "05": "Maio",
    "06": "Junho",
    "07": "Julho",
    "08": "Agosto",
    "09": "Setembro",
    "10": "Outubro",
    "11": "Novembro",
    "12": "Dezembro",
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

      <RegisterSaleModal isOpen={showModal} handleClose={() => setShowModal(false)} />

      <IonContent className="ion-padding-horizontal ion-padding-vertical">
        {isLoading ? (
          <LoadingConsolidatedMonth />
        ) : (
            <>
              <div slot="fixed" className="consolidated-month-detail-heading ion-padding-vertical ion-padding-horizontal">
                <IonText color="dark">
                  <b>Vendas do mês de {monthsTranslationMap[month]} de {year}</b>
                </IonText>
                <br />
                <IonText color="dark">
                  <b>Total de doces vendidos: </b> <span>{consolidatedMonth?.sales.length}</span>
                </IonText>
              </div>

              <div style={{ marginTop: "70px" }}>
                <SalesTable sales={consolidatedMonth?.sales || []} updateSales={updateSales} />
              </div>
            </>
          )}
      </IonContent>

      <IonFooter>
        {!isLoading && (
          <IonToolbar className="footer-toolbar">
            <div className="results-table-container">
              <ResultsTable
                subTotal={consolidatedMonth?.subtotal}
                paidAmount={consolidatedMonth?.paidAmount}
                scheduledAmount={consolidatedMonth?.scheduledAmount}
              />
            </div>
          </IonToolbar>
        )}
      </IonFooter>
    </IonPage>
  );
}

export default ConsolidatedMonthPage;