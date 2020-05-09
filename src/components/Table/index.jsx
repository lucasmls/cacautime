import React from 'react';
import './styles.css'

function Table() {
  return (
    <div className="container mx-auto my-5 px-2 md:px-5">
      <div className="table-wrapper overflow-x-scroll">
        <table class="mx-auto table-fixe w-full">
          <thead>
            <tr>
              <th class="w-1/2 text-left px-4 py-2">Cliente</th>
              <th class="w-1/10 text-left px-4 py-2">Qtd.</th>
              <th class="w-1/4 text-left px-4 py-2">Sabor</th>
              <th class="w-1/4 text-left px-4 py-2">Pago</th>
              <th class="w-1/4 text-left px-4 py-2">Meio de pagamento</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-left border px-4 py-2">Lucas Mendes</td>
              <td class="text-left border px-4 py-2">1</td>
              <td class="text-left border px-4 py-2">Ninho</td>
              <td class="text-left border px-4 py-2">Sim</td>
              <td class="text-left border px-4 py-2">Dinheiro</td>
            </tr>
            <tr class="bg-gray-100">
              <td class="text-left border px-4 py-2">Laisla Pinto Coelho</td>
              <td class="text-left border px-4 py-2">5</td>
              <td class="text-left border px-4 py-2">Limão</td>
              <td class="text-left border px-4 py-2">Não</td>
              <td class="text-left border px-4 py-2">Agendado</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;