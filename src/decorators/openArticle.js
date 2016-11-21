import React, { Component } from 'react'

export default (Component) => class OpenArticle extends Component {
    constructor() {
        super()
        this.state = {
            openArticleId: null
        }
    }

    render() {
        return <Component {...this.props} {...this.state} openArticle = {this.openArticle}/>
    }

    openArticle = id => ev => {
        const { openArticleId } = this.state

        this.setState({
            openArticleId: (openArticleId !== id) ? id : null
        })
    }

}
