import React from 'react'

class FilterButtons extends React.Component {

    
    render () {

        const Buttons = this.props.handlers.map(function(item){
            return(
                <React.Fragment>
                {
                    !item.enabled && <button className = "fil_btn_off" onClick = {item.event.bind(this)} key = {item.name}>{item.name}</button>
                }
                {
                    item.enabled && <button className = "fil_btn_on" onClick = {item.event.bind(this)} key = {item.name}>{item.name}</button>
                }
                </React.Fragment>
            )
        }, this.props.context)

        return (
            <div className = "filter_buttons">
                {Buttons}
            </div>
        )
    }
}

export { FilterButtons };