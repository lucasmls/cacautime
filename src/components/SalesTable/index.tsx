import React from 'react';
import { IonBadge } from '@ionic/react';
import { Sale } from '../../interfaces/Duty'

import './styles.css'

interface Props {
  sales: Sale[]
}

const SalesTable = ({ sales }: Props) => {
  const STATUS_TAG_COLOR = {
    "paid": "success",
    "not_paid": "warning"
  }

  const STATUS_TRANSLATION = {
    "paid": "Pago",
    "not_paid": "Não pago"
  }

  const PAYMENT_METHOD = {
    "money": "Dinheiro",
    "transfer": "Transferência",
    "scheduled": "Agendado"
  }

  return (
    <table className="sales-table">
      <thead>
        <tr>
          <th>Cliente</th>
          <th>Doce</th>
          <th>Status</th>
          <th>Meio de Pagamento</th>
        </tr>
      </thead>
      <tbody>
        {sales.map(sale => (
          <tr key={sale.id}>
            <td>{sale.customerName}</td>
            <td>{sale.candyName}</td>
            <td>
              <IonBadge style={{marginTop: "5px"}} color={STATUS_TAG_COLOR[sale.status]}>
                {STATUS_TRANSLATION[sale.status]}
              </IonBadge>
            </td>
            <td>{PAYMENT_METHOD[sale.paymentMethod]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SalesTable;