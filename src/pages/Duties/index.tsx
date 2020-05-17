import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonText } from '@ionic/react';

import SalesTable from '../../components/SalesTable'
import ResultTable from '../../components/ResultsTable'

import './styles.css';

const Duties: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Plantões</IonTitle>
        </IonToolbar>
      </IonHeader>

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
