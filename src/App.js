import React from 'react'
import { Router } from '@reach/router'

import Login from  './pages/Login'
import Sales from './pages/Sales'
import Analytics from './pages/Analytics'

function App() {
  return (
    <>
      <Router>
        <Sales path="/" />
        <Login path="/login" />
        <Analytics path="/graficos" />
      </Router>
    </>
  );
}

export default App;
