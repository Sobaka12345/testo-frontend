import React from 'react';
import { Transactions } from './components/Transactions'
import transactionsData from './data/transactionsData'
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Transactions data = {transactionsData}/>
    </React.Fragment>
  );
}

export default App;
