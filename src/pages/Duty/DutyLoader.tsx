import React from 'react';
import { IonList, IonItem, IonAvatar, IonSkeletonText, IonLabel } from '@ionic/react';

const LoadingDuty: React.FC = () => {
  return (
    <IonList>
      <IonItem>
        <IonAvatar slot="start">
          <IonSkeletonText animated />
        </IonAvatar>
        <IonLabel>
          <p>
            <IonSkeletonText animated style={{ width: '80%' }} />
          </p>
          <h3>
            <IonSkeletonText animated style={{ width: '50%' }} />
          </h3>
        </IonLabel>
      </IonItem>
      <IonItem>
        <IonAvatar slot="start">
          <IonSkeletonText animated />
        </IonAvatar>
        <IonLabel>
          <p>
            <IonSkeletonText animated style={{ width: '80%' }} />
          </p>
          <h3>
            <IonSkeletonText animated style={{ width: '50%' }} />
          </h3>
        </IonLabel>
      </IonItem>
      <IonItem>
        <IonAvatar slot="start">
          <IonSkeletonText animated />
        </IonAvatar>
        <IonLabel>
          <p>
            <IonSkeletonText animated style={{ width: '80%' }} />
          </p>
          <h3>
            <IonSkeletonText animated style={{ width: '50%' }} />
          </h3>
        </IonLabel>
      </IonItem>
      <IonItem>
        <IonAvatar slot="start">
          <IonSkeletonText animated />
        </IonAvatar>
        <IonLabel>
          <p>
            <IonSkeletonText animated style={{ width: '80%' }} />
          </p>
          <h3>
            <IonSkeletonText animated style={{ width: '50%' }} />
          </h3>
        </IonLabel>
      </IonItem>
      <IonItem>
        <IonAvatar slot="start">
          <IonSkeletonText animated />
        </IonAvatar>
        <IonLabel>
          <p>
            <IonSkeletonText animated style={{ width: '80%' }} />
          </p>
          <h3>
            <IonSkeletonText animated style={{ width: '50%' }} />
          </h3>
        </IonLabel>
      </IonItem>
      <IonItem>
        <IonAvatar slot="start">
          <IonSkeletonText animated />
        </IonAvatar>
        <IonLabel>
          <p>
            <IonSkeletonText animated style={{ width: '80%' }} />
          </p>
          <h3>
            <IonSkeletonText animated style={{ width: '50%' }} />
          </h3>
        </IonLabel>
      </IonItem>
      <IonItem>
        <IonAvatar slot="start">
          <IonSkeletonText animated />
        </IonAvatar>
        <IonLabel>
          <p>
            <IonSkeletonText animated style={{ width: '80%' }} />
          </p>
          <h3>
            <IonSkeletonText animated style={{ width: '50%' }} />
          </h3>
        </IonLabel>
      </IonItem>
      <IonItem>
        <IonAvatar slot="start">
          <IonSkeletonText animated />
        </IonAvatar>
        <IonLabel>
          <p>
            <IonSkeletonText animated style={{ width: '80%' }} />
          </p>
          <h3>
            <IonSkeletonText animated style={{ width: '50%' }} />
          </h3>
        </IonLabel>
      </IonItem>
      <IonItem>
        <IonAvatar slot="start">
          <IonSkeletonText animated />
        </IonAvatar>
        <IonLabel>
          <p>
            <IonSkeletonText animated style={{ width: '80%' }} />
          </p>
          <h3>
            <IonSkeletonText animated style={{ width: '50%' }} />
          </h3>
        </IonLabel>
      </IonItem>
    </IonList>
  )
}

export default LoadingDuty