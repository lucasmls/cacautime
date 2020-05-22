import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton } from '@ionic/react';

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
        {buttons.map((btn, index) => (
          <IonButtons key={index} slot={btn.slot} onClick={btn.handlerFunc}>
            <IonButton>
              {btn.text}
            </IonButton>
          </IonButtons>
        ))}
      </IonToolbar>
    </IonHeader>
  )
}

export default Header;