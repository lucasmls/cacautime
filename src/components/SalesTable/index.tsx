import React from 'react';
import './styles.css'

const SalesTable: React.FC = () => {
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
        <tr>
          <td>Lucas Mendes</td>
          <td>Palha Italiana</td>
          <td>Pago</td>
          <td>Transferência</td>
        </tr>
        <tr>
          <td>Laisla Pinto Coelho</td>
          <td>Bolo no Pote - Brigadeiro</td>
          <td>Não pago</td>
          <td>Agendado</td>
        </tr>
        <tr>
          <td>Lucas Mendes</td>
          <td>Palha Italiana</td>
          <td>Pago</td>
          <td>Transferência</td>
        </tr>
        <tr>
          <td>Laisla Pinto Coelho</td>
          <td>Bolo no Pote - Brigadeiro</td>
          <td>Não pago</td>
          <td>Agendado</td>
        </tr>
      </tbody>
    </table>
  );
}

export default SalesTable;