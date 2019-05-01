import React from 'react';
import { Transactions } from './components/Transactions'
import { FilterButtons } from './components/FilterButtons'
import transactionsData from './data/transactionsData'
import './App.css';

class App extends React.Component {
  state = {
    t_data: transactionsData,
  }
  handlers = [
    {
      name: "Доход",
      enabled: false,
      event: function(e) {
        this.setState({t_data : this.state.t_data.filter(function(item){
          return item.type === "доход" ? true : false;
        })})
      }
    },
    {
      name: "Расход",
      enabled: false,
      event: function(e) {
        this.setState({t_data : this.state.t_data.filter(function(item){
          return item.type === "расход" ? true : false;
        })})
      }
    },
    {
      name: "больше 1000",
      enabled: false,
      event: function(e) {
        this.setState({t_data : this.state.t_data.filter(function(item){
          return item.value > 1000 ? true : false;
        })})
      }
    },
    {
      name: "Последний месяц",
      enabled: false,
      event: function(e) {
        this.setState({t_data : this.state.t_data.filter(function(item){
          return true;
        })})
      }
    }
  ]

  render () {
    return (
      <React.Fragment>
        <Transactions data = { this.state.t_data }/>
        <FilterButtons handlers = {this.handlers} context = {this}/>
      </React.Fragment>
    )
  }
}

export default App;
