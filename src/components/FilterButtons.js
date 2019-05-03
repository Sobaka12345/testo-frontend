import React from 'react'

class FilterButtons extends React.Component {

    
    render () {

        const Buttons = this.props.buttons.map(function(item){
            const onClick = () => {
                item.event(item.active, item.id);
                item.active = item.active ? false : true
            }
            return(
                <React.Fragment key = {item.id}>
                {
                    !item.active && <button className = "fil_btn_off" onClick = {onClick}>{item.name}</button>
                }
                {
                    item.active && <button className = "fil_btn_on" onClick = {onClick}>{item.name}</button>
                }
                </React.Fragment>
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