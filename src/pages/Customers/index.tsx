import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon, IonItem, IonAvatar, IonLabel } from '@ionic/react';
import { addOutline } from 'ionicons/icons';

import RegisterCustomerModal from '../../components/RegisterCustomerModal'

import './styles.css';

const Customers: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Clientes</IonTitle>
          <IonButtons slot="primary" onClick={() => setShowModal(true)}>
            <IonButton>
              <IonIcon color="dark" slot="icon-only" icon={addOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <RegisterCustomerModal isOpen={showModal} handleClose={() => setShowModal(false)} />

      <IonContent className="ion-padding-horizontal ion-padding-vertical">
        <IonItem className="customer-item">
          <IonAvatar slot="start">
            <img alt="User" src="https://ionicframework.com/docs/demos/api/avatar/avatar.svg" />
          </IonAvatar>
          <IonLabel>
            <h3>Laisla Pinto Coelho</h3>
            <p>(31) 91234-0750</p>
          </IonLabel>
        </IonItem>
        <IonItem className="customer-item">
          <IonAvatar slot="start">
            <img alt="User" src="https://ionicframework.com/docs/demos/api/avatar/avatar.svg" />
          </IonAvatar>
          <IonLabel>
            <h3>Lucas Mendes</h3>
            <p>(31) 98323-1234</p>
          </IonLabel>
        </IonItem>
        <IonItem className="customer-item">
          <IonAvatar slot="start">
            <img alt="User" src="https://ionicframework.com/docs/demos/api/avatar/avatar.svg" />
          </IonAvatar>
          <IonLabel>
            <h3>Luciene Fonseca</h3>
            <p>(31) 92371-0750</p>
          </IonLabel>
        </IonItem>
        <IonItem className="customer-item">
          <IonAvatar slot="start">
            <img alt="User" src="https://ionicframework.com/docs/demos/api/avatar/avatar.svg" />
          </IonAvatar>
          <IonLabel>
            <h3>Laisla Pinto Coelho</h3>
            <p>(31) 91234-0750</p>
          </IonLabel>
        </IonItem>
        <IonItem className="customer-item">
          <IonAvatar slot="start">
            <img alt="User" src="https://ionicframework.com/docs/demos/api/avatar/avatar.svg" />
          </IonAvatar>
          <IonLabel>
            <h3>Lucas Mendes</h3>
            <p>(31) 98323-1234</p>
          </IonLabel>
        </IonItem>
        <IonItem className="customer-item">
          <IonAvatar slot="start">
            <img alt="User" src="https://ionicframework.com/docs/demos/api/avatar/avatar.svg" />
          </IonAvatar>
          <IonLabel>
            <h3>Luciene Fonseca</h3>
            <p>(31) 92371-0750</p>
          </IonLabel>
        </IonItem>
        <IonItem className="customer-item">
          <IonAvatar slot="start">
            <img alt="User" src="https://ionicframework.com/docs/demos/api/avatar/avatar.svg" />
          </IonAvatar>
          <IonLabel>
            <h3>Laisla Pinto Coelho</h3>
            <p>(31) 91234-0750</p>
          </IonLabel>
        </IonItem>
        <IonItem className="customer-item">
          <IonAvatar slot="start">
            <img alt="User" src="https://ionicframework.com/docs/demos/api/avatar/avatar.svg" />
          </IonAvatar>
          <IonLabel>
            <h3>Lucas Mendes</h3>
            <p>(31) 98323-1234</p>
          </IonLabel>
        </IonItem>
        <IonItem className="customer-item">
          <IonAvatar slot="start">
            <img alt="User" src="https://ionicframework.com/docs/demos/api/avatar/avatar.svg" />
          </IonAvatar>
          <IonLabel>
            <h3>Luciene Fonseca</h3>
            <p>(31) 92371-0750</p>
          </IonLabel>
        </IonItem>
        <IonItem className="customer-item">
          <IonAvatar slot="start">
            <img alt="User" src="https://ionicframework.com/docs/demos/api/avatar/avatar.svg" />
          </IonAvatar>
          <IonLabel>
            <h3>Laisla Pinto Coelho</h3>
            <p>(31) 91234-0750</p>
          </IonLabel>
        </IonItem>
        <IonItem className="customer-item">
          <IonAvatar slot="start">
            <img alt="User" src="https://ionicframework.com/docs/demos/api/avatar/avatar.svg" />
          </IonAvatar>
          <IonLabel>
            <h3>Lucas Mendes</h3>
            <p>(31) 98323-1234</p>
          </IonLabel>
        </IonItem>
        <IonItem className="customer-item">
          <IonAvatar slot="start">
            <img alt="User" src="https://ionicframework.com/docs/demos/api/avatar/avatar.svg" />
          </IonAvatar>
          <IonLabel>
            <h3>Luciene Fonseca</h3>
            <p>(31) 92371-0750</p>
          </IonLabel>
        </IonItem>
        <IonItem className="customer-item">
          <IonAvatar slot="start">
            <img alt="User" src="https://ionicframework.com/docs/demos/api/avatar/avatar.svg" />
          </IonAvatar>
          <IonLabel>
            <h3>Laisla Pinto Coelho</h3>
            <p>(31) 91234-0750</p>
          </IonLabel>
        </IonItem>
        <IonItem className="customer-item">
          <IonAvatar slot="start">
            <img alt="User" src="https://ionicframework.com/docs/demos/api/avatar/avatar.svg" />
          </IonAvatar>
          <IonLabel>
            <h3>Lucas Mendes</h3>
            <p>(31) 98323-1234</p>
          </IonLabel>
        </IonItem>
        <IonItem className="customer-item">
          <IonAvatar slot="start">
            <img alt="User" src="https://ionicframework.com/docs/demos/api/avatar/avatar.svg" />
          </IonAvatar>
          <IonLabel>
            <h3>Luciene Fonseca</h3>
            <p>(31) 92371-0750</p>
          </IonLabel>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Customers;


