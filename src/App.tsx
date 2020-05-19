import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { calendarOutline, personOutline } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* Pages */
import Duties from './pages/Duties';
import Customers from './pages/Customers'
import Candies from './pages/Candies'

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/duties" component={Duties} exact={true} />
          <Route path="/customers" component={Customers} exact={true} />
          <Route path="/candies" component={Candies} exact={true} />
          <Route path="/" render={() => <Redirect to="/duties" />} exact={true} />
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="customers" href="/customers">
            <IonIcon icon={personOutline} />
            <IonLabel>Clientes</IonLabel>
          </IonTabButton>
          <IonTabButton tab="duties" href="/duties">
            <IonIcon icon={calendarOutline} />
            <IonLabel>Plantões</IonLabel>
          </IonTabButton>
          <IonTabButton tab="candies" href="/candies">
            <IonIcon src='https://image.flaticon.com/icons/svg/2913/2913787.svg' />
            <IonLabel>Doces</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
