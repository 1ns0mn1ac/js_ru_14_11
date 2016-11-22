import React, { Component } from 'react'

export default (Component) => class Accordion extends Component {
    constructor() {
        super()
        this.state = {
            activeSectionId: null
        }
    }

    render() {
        return <Component {...this.props} {...this.state} toggleSection = {this.toggleSection} />
    }

    toggleSection = id => ev => {
        const { activeSectionId } = this.state

        this.setState({
            activeSectionId: (activeSectionId !== id) ? id : null
        })
    }

}
