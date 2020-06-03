import React from 'react';
import { IonBadge } from '@ionic/react';
import { Sale } from '../../interfaces/Duty'

import './styles.css'

interface Props {
  sales: Sale[]
  updateSales(updatedSales: Sale[]): void
}

const SalesTable = ({ sales, updateSales }: Props) => {
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

  const handleStatusChange = (sale: Sale) => {
    const status = Object.keys(STATUS_TRANSLATION)

    for (let index = 0; index < status.length; index++) {
      const statusItem = status[index];

      if (statusItem === sale.status && status[index +1]) {
        // @ts-ignore/line
        sale.status = status[index +1]
        break;
      }

      if (statusItem === sale.status && !status[index +1]) {
        // @ts-ignore/line
        sale.status = status[0]
        break;
      }
    }

    const updatedSales = sales.reduce((acc, rSale) => {
      const saleToReturn = sale.id === rSale.id ? sale : rSale
      return [...acc, saleToReturn]
    }, [] as Sale[])

    updateSales(updatedSales)
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
              <IonBadge
                className="status-badge"
                color={STATUS_TAG_COLOR[sale.status]}
                onClick={() => handleStatusChange(sale)}
              >
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