import React from 'react';
import './styles.css'

const ResultsTable: React.FC = () => {
  return (
    <table className="results-table">
      <thead>
        <tr>
          <th>Subtotal</th>
          <th>A receber</th>
          <th>Recebido</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>60$</td>
          <td>35$</td>
          <td>25$</td>
        </tr>
      </tbody>
    </table>
  );
}

export default ResultsTable;