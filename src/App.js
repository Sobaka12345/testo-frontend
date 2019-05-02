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
  handlers = [
    {
      name: "Доход",
      event: (e) =>  {
        if(e.currentTarget.className === "fil_btn_off")
        {
          e.currentTarget.className = "fil_btn_on"
          this.setState({t_data : this.state.t_data.map(function(item){
            if(item.type !== "доход")
                item.filters["Доход"] = 1
            return item
          })})
        } else
        {
          e.currentTarget.className = "fil_btn_off"
          this.setState({t_data : this.state.t_data.map(function(item){
            delete item.filters["Доход"]
            return item
          })})
        }
      }
    },
    {
      name: "Расход",
      event: (e) =>  {
        if(e.currentTarget.className === "fil_btn_off")
        {
          e.currentTarget.className = "fil_btn_on"
          this.setState({t_data : this.state.t_data.map(function(item){
            if(item.type !== "расход")
                item.filters["Расход"] = 1
            return item
          })})
        } else
        {
          e.currentTarget.className = "fil_btn_off"
          this.setState({t_data : this.state.t_data.map(function(item){
            delete item.filters["Расход"]
            return item
          })})
        }
      }
    },
    {
      name: "Больше 1000",
      event: (e) =>  {
        if(e.currentTarget.className === "fil_btn_off")
        {
          e.currentTarget.className = "fil_btn_on"
          this.setState({t_data : this.state.t_data.map(function(item){
            if(item.value <= 1000 )
                item.filters["Больше 1000"] = 1
            return item
          })})
        } else
        {
          e.currentTarget.className = "fil_btn_off"
          this.setState({t_data : this.state.t_data.map(function(item){
            delete item.filters["Больше 1000"]
            return item
          })})
        }
      }
    },
    {
      name: "Последний месяц",
      event: (e) =>  {
        if(e.currentTarget.className === "fil_btn_off")
        {
          e.currentTarget.className = "fil_btn_on"
          this.setState({t_data : this.state.t_data.map(function(item){
            let date = new Date(item.date)
            let monthBegin = new Date()
            monthBegin.setDate(1)
            monthBegin.setHours(0,0,0,0)
            if(date < monthBegin)
              item.filters["Последний месяц"] = 1
            return item
          })})
        } else
        {
          e.currentTarget.className = "fil_btn_off"
          this.setState({t_data : this.state.t_data.map(function(item){
            delete item.filters["Последний месяц"]
            return item
          })})
        }
      }
    }
  ]

  render () {
    return (
      <React.Fragment>
        <Transactions data = { this.state.t_data }/>
        <FilterButtons handlers = {this.handlers}/>
      </React.Fragment>
    )
  }
}

export default App;
