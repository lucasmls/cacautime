import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonText, IonButtons, IonButton, IonIcon } from '@ionic/react';
import { addOutline } from 'ionicons/icons';

import SalesTable from '../../components/SalesTable'
import ResultTable from '../../components/ResultsTable'
import RegisterDutyModal from '../../components/RegisterDutyModal'

import './styles.css';

const Duties: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Plantões</IonTitle>
          <IonButtons slot="primary" onClick={() => setShowModal(true)}>
            <IonButton>
              <IonIcon color="dark" slot="icon-only" icon={addOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <RegisterDutyModal isOpen={showModal} handleClose={() => setShowModal(false)} />

      <IonContent className="ion-padding-horizontal">
        <div className="duty">
          <IonText color="dark">
            <h4>Plantão 20/04/200 - 15 Doces</h4>
          </IonText>
          <SalesTable />
          <ResultTable />
        </div>
        <div className="duty">
          <IonText color="dark">
            <h4>Plantão 20/04/200 - 15 Doces</h4>
          </IonText>
          <SalesTable />
          <ResultTable />
        </div>
        <div className="duty">
          <IonText color="dark">
            <h4>Plantão 20/04/200 - 15 Doces</h4>
          </IonText>
          <SalesTable />
          <ResultTable />
        </div>
        <div className="duty">
          <IonText color="dark">
            <h4>Plantão 20/04/200 - 15 Doces</h4>
          </IonText>
          <SalesTable />
          <ResultTable />
        </div>
        <div className="duty">
          <IonText color="dark">
            <h4>Plantão 20/04/200 - 15 Doces</h4>
          </IonText>
          <SalesTable />
          <ResultTable />
        </div>
        <div className="duty">
          <IonText color="dark">
            <h4>Plantão 20/04/200 - 15 Doces</h4>
          </IonText>
          <SalesTable />
          <ResultTable />
        </div>
        <div className="duty">
          <IonText color="dark">
            <h4>Plantão 20/04/200 - 15 Doces</h4>
          </IonText>
          <SalesTable />
          <ResultTable />
        </div>

        <br/>
      </IonContent>
    </IonPage>
  );
};

export default Duties;
