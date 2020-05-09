import React from 'react';
import { Link } from '@reach/router';


function Heading() {
  return (
    <nav>
      <Link to="/">Vendas</Link>
      <Link to="/analytics">Gráficos</Link>
    </nav>
  );
}

export default Heading;