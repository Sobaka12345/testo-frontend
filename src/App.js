import React from 'react';
import { Transactions } from './components/Transactions'
import { FilterButtons } from './components/FilterButtons'
import transactionsData from './data/transactionsData'
import './App.css';

class App extends React.Component {
  state = {
    t_data: transactionsData.map(function(item){
      item.filters = []
      return item
    }),
  }

  deleteFilter = (id) => {
    this.setState({t_data : this.state.t_data.map(function(item){
      delete item.filters[id]
      return item
    })})
  }

  buttons = [
    {
      id: 1,
      name: "Доход",
      active: false,
      event: (active, id) =>  {
        if(!active)
        {
          this.setState({t_data : this.state.t_data.map(function(item){
            if(item.type !== "доход")
                item.filters[id] = 1
            return item
          })})
        } else this.deleteFilter(id)
      }
    },
    {
      id: 2,
      name: "Расход",
      active: false,
      event: (active, id) =>  {
        if(!active)
        {
          this.setState({t_data : this.state.t_data.map(function(item){
            if(item.type !== "расход")
                item.filters[id] = 1
            return item
          })})
        } else this.deleteFilter(id)
      }
    },
    {
      id: 3,
      name: "Больше 1000",
      active: false,
      event: (active, id) =>  {
        if(!active)
        {
          this.setState({t_data : this.state.t_data.map(function(item){
            if(item.value <= 1000 )
                item.filters[id] = 1
            return item
          })})
        } else this.deleteFilter(id)
      }
    },
    {
      id: 4,
      name: "Последний месяц",
      active: false,
      event: (active, id) =>  {
        if(!active)
        {
          this.setState({t_data : this.state.t_data.map(function(item){
            let date = new Date(item.date)
            let monthBegin = new Date()
            monthBegin.setDate(1)
            monthBegin.setHours(0,0,0,0)
            if(date < monthBegin)
              item.filters[id] = 1
            return item
          })})
        } else this.deleteFilter(id)
      }
    }
  ]

  render () {
    return (
      <React.Fragment>
        <Transactions data = { this.state.t_data }/>
        <FilterButtons buttons = {this.buttons}/>
      </React.Fragment>
    )
  }
}

export default App;
