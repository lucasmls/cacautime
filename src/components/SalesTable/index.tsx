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

  const handleStatusAndPaymentMethodChange = (key: "status" | "paymentMethod", sale: Sale) => {
    const saleColumn = {
      status: Object.keys(STATUS_TRANSLATION),
      paymentMethod: Object.keys(PAYMENT_METHOD),
    }

    for (let index = 0; index < saleColumn[key].length; index++) {
      const columnItem = saleColumn[key][index];

      if (columnItem === sale[key] && saleColumn[key][index +1]) {
        // @ts-ignore/line
        sale[key] = saleColumn[key][index +1]
        break;
      }

      if (columnItem === sale[key] && !saleColumn[key][index +1]) {
        // @ts-ignore/line
        sale[key] = saleColumn[key][0]
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
                onClick={() => handleStatusAndPaymentMethodChange("status", sale)}
              >
                {STATUS_TRANSLATION[sale.status]}
              </IonBadge>
            </td>
            <td onClick={() => handleStatusAndPaymentMethodChange("paymentMethod", sale)}>{PAYMENT_METHOD[sale.paymentMethod]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SalesTable;