import React from 'react';
import { useParams } from 'react-router';
import { IonPage, IonHeader, IonToolbar, IonButtons, IonContent, IonBackButton, IonTitle, IonFooter, IonText } from '@ionic/react';

import ResultsTable from '../../components/ResultsTable'
import SalesTable from '../../components/SalesTable'

import './styles.css'

const Duty = () => {
  const { id } = useParams();

  console.log(`Fetch sales of duty with id: ${id}`)

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
        <div slot="fixed" className="duty-detail-heading ion-padding-vertical ion-padding-horizontal">
          <IonText color="dark">
            <b>Data do plantão: </b> <span>20/03/2020</span>
          </IonText>
          <br/>
          <IonText color="dark">
            <b>Total de doces levados: </b> <span>20</span>
          </IonText>
        </div>

        <div style={{ marginTop: "70px" }}>
          <SalesTable
            sales={[
              {
                candy_id: 1,
                candy_name: "Palha Italiana - Ninho",
                candy_price: 500,
                customer_id: 1,
                customer_name: "Lucas Mendes",
                customer_phone: "21983996543",
                id: 1,
                payment_method: "money",
                status: "paid",
              },
              {
                candy_id: 1,
                candy_name: "Palha Italiana - Ninho",
                candy_price: 500,
                customer_id: 1,
                customer_name: "Lucas Mendes",
                customer_phone: "21983996543",
                id: 3,
                payment_method: "scheduled",
                status: "not_paid",
              },
              {
                candy_id: 1,
                candy_name: "Palha Italiana - Ninho",
                candy_price: 500,
                customer_id: 1,
                customer_name: "Lucas Mendes",
                customer_phone: "21983996543",
                id: 2,
                payment_method: "money",
                status: "not_paid",
              },
              {
                candy_id: 1,
                candy_name: "Palha Italiana - Ninho",
                candy_price: 500,
                customer_id: 1,
                customer_name: "Lucas Mendes",
                customer_phone: "21983996543",
                id: 4,
                payment_method: "money",
                status: "paid",
              },
              {
                candy_id: 1,
                candy_name: "Palha Italiana - Ninho",
                candy_price: 500,
                customer_id: 1,
                customer_name: "Lucas Mendes",
                customer_phone: "21983996543",
                id: 5,
                payment_method: "scheduled",
                status: "not_paid",
              },
              {
                candy_id: 1,
                candy_name: "Palha Italiana - Ninho",
                candy_price: 500,
                customer_id: 1,
                customer_name: "Lucas Mendes",
                customer_phone: "21983996543",
                id: 6,
                payment_method: "money",
                status: "not_paid",
              },
              {
                candy_id: 1,
                candy_name: "Palha Italiana - Ninho",
                candy_price: 500,
                customer_id: 1,
                customer_name: "Lucas Mendes",
                customer_phone: "21983996543",
                id: 7,
                payment_method: "money",
                status: "paid",
              },
              {
                candy_id: 1,
                candy_name: "Palha Italiana - Ninho",
                candy_price: 500,
                customer_id: 1,
                customer_name: "Lucas Mendes",
                customer_phone: "21983996543",
                id: 8,
                payment_method: "scheduled",
                status: "not_paid",
              },
              {
                candy_id: 1,
                candy_name: "Palha Italiana - Ninho",
                candy_price: 500,
                customer_id: 1,
                customer_name: "Lucas Mendes",
                customer_phone: "21983996543",
                id: 9,
                payment_method: "money",
                status: "not_paid",
              },
              {
                candy_id: 1,
                candy_name: "Palha Italiana - Ninho",
                candy_price: 500,
                customer_id: 1,
                customer_name: "Lucas Mendes",
                customer_phone: "21983996543",
                id: 10,
                payment_method: "money",
                status: "paid",
              },
              {
                candy_id: 1,
                candy_name: "Palha Italiana - Ninho",
                candy_price: 500,
                customer_id: 1,
                customer_name: "Lucas Mendes",
                customer_phone: "21983996543",
                id: 11,
                payment_method: "scheduled",
                status: "not_paid",
              },
              {
                candy_id: 1,
                candy_name: "Palha Italiana - Ninho",
                candy_price: 500,
                customer_id: 1,
                customer_name: "Lucas Mendes",
                customer_phone: "21983996543",
                id: 12,
                payment_method: "money",
                status: "not_paid",
              },
            ]}
          />
        </div>
        
      </IonContent>
      <IonFooter>
        <IonToolbar className="footer-toolbar">
          <div className="results-table-container">
            <ResultsTable
              subTotal={12312}
              paidAmount={123}
              scheduledAmount={2133}
            />
          </div>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
}

export default Duty;