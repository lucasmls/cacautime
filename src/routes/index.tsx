import React from 'react';
import { Redirect, Switch } from 'react-router-dom';
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { calendarOutline, personOutline } from 'ionicons/icons';

import PrivateRoute from './private'
import PublicRoute from './public'

import Login from '../pages/Login';
import Months from '../pages/Months';
import Duty from '../pages/Duty';
import Customers from '../pages/Customers';
import Candies from '../pages/Candies';

const Routes: React.FC = () => {
  return (
    <IonReactRouter>
      <Switch>
        <PublicRoute path='/login' component={Login} />

        <IonTabs>
          <IonRouterOutlet>
            <PrivateRoute path="/months" component={Months} />
            <PrivateRoute path="/duty/:id" component={Duty} exact={true} />
            <PrivateRoute path="/customers" component={Customers} exact={true} />
            <PrivateRoute path="/candies" component={Candies} exact={true} />
            <PrivateRoute path="/" render={() => <Redirect to="/months" />} exact={true} />
          </IonRouterOutlet>
      
          <IonTabBar slot="bottom">
            <IonTabButton tab="customers" href="/customers">
              <IonIcon icon={personOutline} />
              <IonLabel>Clientes</IonLabel>
            </IonTabButton>
            <IonTabButton tab="Months" href="/months">
              <IonIcon icon={calendarOutline} />
              <IonLabel>Meses</IonLabel>
            </IonTabButton>
            <IonTabButton tab="candies" href="/candies">
              <IonIcon src='https://image.flaticon.com/icons/svg/2913/2913787.svg' />
              <IonLabel>Doces</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </Switch>

    </IonReactRouter>
  )
}

export default Routes;