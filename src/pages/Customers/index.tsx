import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon, IonItem, IonAvatar, IonLabel, IonList } from '@ionic/react';
import { personAddOutline } from 'ionicons/icons';

import RegisterCustomerModal from '../../components/RegisterCustomerModal'
import CustomersLoader from './CustomersLoader'

import './styles.css';
import { api } from '../../services/api';
import Customer from '../../interfaces/Customer';
import { customersList } from '../../store/customers'

const Customers: React.FC = () => {
  const [customers, setCustomers] = useRecoilState(customersList) as [Customer[], (c: Customer[]) => null]

  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    (async () => {
      const { data } = await api.get<Customer[]>('/customer')
      setCustomers([...data])
      setIsLoading(false)
    })()
  }, [setCustomers])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Clientes</IonTitle>
          <IonButtons slot="primary" onClick={() => setShowModal(true)}>
            <IonButton>
              <IonIcon color="dark" slot="icon-only" icon={personAddOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <RegisterCustomerModal isOpen={showModal} handleClose={() => setShowModal(false)} />

      <IonContent className="ion-padding-horizontal ion-padding-vertical">
        {isLoading ? (
          <CustomersLoader />
        ) : (
          <IonList>
            {customers.map(customer => (
              <IonItem className="customer-item" key={String(customer.id)}>
                <IonAvatar slot="start">
                  <img alt="User" src="https://ionicframework.com/docs/demos/api/avatar/avatar.svg" />
                </IonAvatar>
                <IonLabel>
                  <h3>{customer.name}</h3>
                  <p>{customer.phone}</p>
                </IonLabel>
              </IonItem>
            ))}
          </IonList>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Customers;


