import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonText } from '@ionic/react';

interface Props {
  title: string
  buttons: {
    text: React.ReactNode
    slot: "primary" | "secondary"
    handlerFunc(): void
  }[]
}

const Header = ({ title, buttons }: Props) => {
  return (
    <IonHeader>
      <IonToolbar>
      
        <IonTitle>{title}</IonTitle>
        {buttons.map(btn => (
          <IonButtons slot={btn.slot} onClick={btn.handlerFunc}>
            <IonButton>
              {/* <IonText> */}
              {btn.text}
              {/* </IonText> */}
            </IonButton>
          </IonButtons>
        ))}
      </IonToolbar>
    </IonHeader>
  )
}

export default Header;