import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

import './styles.css';

const Duties: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Plantões</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Table>
          <Thead className="my-head">
            <Tr>
              <Th>Cliente</Th>
              <Th>Doce</Th>
              <Th>Status</Th>
              <Th>Meio de Pagamento</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Lucas Mendes</Td>
              <Td>Palha Italiana</Td>
              <Td>Pago</Td>
              <Td>Transferência</Td>
            </Tr>
          </Tbody>
        </Table>
      </IonContent>
    </IonPage>
  );
};

export default Duties;
