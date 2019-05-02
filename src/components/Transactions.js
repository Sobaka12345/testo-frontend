import React from 'react'

class Transactions extends React.Component {
    render () {
        const transactionsTemplate = this.props.data.map(function(item){
            return (
                <React.Fragment  key = {item.id}>
                {
                    Object.keys(item.filters).length === 0 &&
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.value}</td>
                        <td>{item.date}</td>
                        <td>{item.type}</td>
                    </tr>
                }
                </React.Fragment>
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