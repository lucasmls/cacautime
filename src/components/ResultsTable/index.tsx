import React from 'react';
import './styles.css'
import { toBRL } from '../../utils/money';

interface Props {
  subTotal: number;
  paidAmount: number;
  scheduledAmount: number;
}

const ResultsTable = ({ subTotal, paidAmount, scheduledAmount }: Props) => {
  return (
    <table className="results-table">
      <thead>
        <tr>
          <th>Total</th>
          <th>A receber</th>
          <th>Recebido</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{toBRL(subTotal)}</td>
          <td>{toBRL(scheduledAmount)}</td>
          <td>{toBRL(paidAmount)}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default ResultsTable;