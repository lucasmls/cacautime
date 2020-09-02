import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil'
import { IonContent, IonPage, IonIcon, IonItem, IonAvatar, IonLabel, IonList } from '@ionic/react';
import { calendarOutline, addOutline } from 'ionicons/icons';

import './styles.css';
import Header from '../../components/Header';
import MonthsLoader from './MonthsLoader'
import RegisterSaleModal from '../../components/RegisterSaleModal';
import { api } from '../../services/api';
import { Month } from '../../interfaces/Month';
import { monthsList } from '../../store/months';

const Months: React.FC = () => {
  const [months, setMonths] = useRecoilState(monthsList) as [Month[], (c: Month[]) => null]

  const [isLoading, setIsLoading] = useState(true)
  const [showRegisterSaleModal, setShowRegisterSaleModal] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get<Month[]>('/sale/months')
        setMonths([...data])
        setIsLoading(false)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [setMonths])

  const monthsTranslationMap = {
    "January": "Janeiro",
    "February": "Fevereiro",
    "March": "Março",
    "April": "Abril",
    "May": "Maio",
    "June": "Junho",
    "July": "Julho",
    "August": "Agosto",
    "September": "Setembro",
    "October": "Outubro",
    "November": "Novembro",
    "December": "Dezembro",
  }

  return (
    <IonPage>
      <Header
        title="Meses"
        buttons={[
          {
            handlerFunc: () => setShowRegisterSaleModal(true),
            slot: "primary",
            text: (
              <IonIcon color="dark" slot="icon-only" icon={addOutline} />
            ),
          }
        ]}
      />

      <RegisterSaleModal isOpen={showRegisterSaleModal} handleClose={() => setShowRegisterSaleModal(false)} />

      <IonContent className="ion-padding-horizontal ion-padding-vertical">
        {isLoading ? (
          <MonthsLoader />
        ) : (
            <IonList>
              {months.map((month, i) => (
                <IonItem className="month-item" key={i} routerLink={`/month/${month.number}/${month.year}`} detail={true}>
                  <IonAvatar slot="start">
                    <div className="month-item-icon">
                      <IonIcon icon={calendarOutline} size="large" />
                    </div>
                  </IonAvatar>
                  <IonLabel>
                    <h3>
                      Vendas do mês de <b>{monthsTranslationMap[month.month]}</b> de <b>{month.year}</b>
                    </h3>
                  </IonLabel>
                </IonItem>
              ))}
            </IonList>
          )}
        <br />
      </IonContent>
    </IonPage>
  );
};

export default Months;
