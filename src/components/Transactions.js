import React from 'react'

class Transactions extends React.Component {
    state = {
        visible: false
    }
    render () {
        const transactionsTemplate = this.props.data.map(function(item){
            return (
                <tr key = {item.id}>
                    <td>{item.id}</td>
                    <td>{item.value}</td>
                    <td>{item.date}</td>
                    <td>{item.type}</td>
                </tr>
            )
        })

        return (
            <table className = "transactions">
                <thead>
                    <tr>
                        <td>Код</td>
                        <td>Сумма</td>
                        <td>Дата</td>
                        <td>Тип</td>
                    </tr>
                </thead>
                <tbody>
                    {transactionsTemplate} 
                </tbody>
            </table>
        )
    }
}

export { Transactions };