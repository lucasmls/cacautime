import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil'
import { IonContent, IonPage, IonIcon, IonItem, IonAvatar, IonLabel, IonList, IonItemSliding, IonItemOptions, IonItemOption, IonAlert, IonLoading } from '@ionic/react';
import { personAddOutline, trashOutline } from 'ionicons/icons';

import RegisterCustomerModal from '../../components/RegisterCustomerModal'
import Header from '../../components/Header';
import CustomersLoader from './CustomersLoader'

import './styles.css';
import { api } from '../../services/api';
import Customer from '../../interfaces/Customer';
import { customersList } from '../../store/customers'

const Customers: React.FC = () => {
  const [customers, setCustomers] = useRecoilState(customersList) as [Customer[], (c: Customer[]) => null]

  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [customerIDToBeDeleted, setCustomerIDToBeDeleted] = useState(0)

  useEffect(() => {
    (async () => {
      const { data } = await api.get<Customer[]>('/customer')
      setCustomers([...data])
      setIsLoading(false)
    })()
  }, [setCustomers])

  const deleteCustomer = async () => {
    setIsSubmitting(true)

    try {
      await api.delete(`/customer/${customerIDToBeDeleted}`)
      setCustomers(customers.filter(customer => customer.id !== customerIDToBeDeleted)) 
    } catch (error) {
      console.log("Failed to delete the customer...")
      console.log(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDeleteCustomerClick = (customerID: number) => {
    setCustomerIDToBeDeleted(customerID)
    setShowAlert(true)
  }

  return (
    <IonPage>
      <Header
        title="Clientes"
        buttons={[{
          handlerFunc: () => setShowModal(true),
          slot: "primary",
          text: (
            <IonIcon color="dark" slot="icon-only" icon={personAddOutline} />
          ),
        }]}
      />

      <RegisterCustomerModal isOpen={showModal} handleClose={() => setShowModal(false)} />

      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        cssClass='my-custom-class'
        header={'Perigo!'}
        message={'Tem certeza que deseja <strong>excluir permanentemente</strong> este cliente??'}
        buttons={[
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              setCustomerIDToBeDeleted(0)
            }
          },
          {
            text: 'Excluir',
            handler: async () => {
              await deleteCustomer()
            }
          }
        ]}
      />

      <IonLoading
        isOpen={isSubmitting}
        message={'Excluindo cliente...'}
        duration={5000}
      />

      <IonContent className="ion-padding-horizontal ion-padding-vertical">
        {isLoading ? (
          <CustomersLoader />
        ) : (
          <IonList>
            {customers.map(customer => (
              <IonItemSliding key={String(customer.id)}>
                <IonItemOptions side="end">
                  <IonItemOption color="danger" onClick={() => handleDeleteCustomerClick(customer.id)}>
                    <IonIcon slot="icon-only" icon={trashOutline} />
                  </IonItemOption>
                </IonItemOptions>

                <IonItem className="customer-item">
                  <IonAvatar slot="start">
                    <img alt="User" src="https://ionicframework.com/docs/demos/api/avatar/avatar.svg" />
                  </IonAvatar>
                  <IonLabel>
                    <h3>{customer.name}</h3>
                    <p>{customer.phone}</p>
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

export default Customers;


