import React from 'react'

export default (Component) => class WrappedComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            isOpen: false
        }
    }

    render() {
        return <Component {...this.props} {...this.state} toggleOpen = {this.toggleOpen}/>
    }

    toggleOpen = ev => {
        ev.preventDefault()

        this.setState({
            isOpen: !this.state.isOpen
        })
    }

}
