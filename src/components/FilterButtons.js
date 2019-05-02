import React from 'react'

class FilterButtons extends React.Component {

    
    render () {

        const Buttons = this.props.handlers.map(function(item){
            return(
                 <button className = "fil_btn_off" onClick = {item.event} key = {item.name}>{item.name}</button>
            )
        })

        return (
            <div className = "filter_buttons">
                {Buttons}
            </div>
        )
    }
}

export { FilterButtons };