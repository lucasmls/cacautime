import React, { useState } from 'react';
import { IonContent, IonPage, IonText, IonIcon } from '@ionic/react';
import { addOutline } from 'ionicons/icons';

import SalesTable from '../../components/SalesTable'
import ResultTable from '../../components/ResultsTable'
import RegisterDutyModal from '../../components/RegisterDutyModal'

import './styles.css';
import Header from '../../components/Header';

const Duties: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

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
