import React, { Component } from 'react'
import CommentList from './CommentList'

class Article extends Component {

    constructor() {
        super()
        this.state = {
            isOpen: false,
            obj: { foo: 'bar' }
        }
    }

    render() {
        const { article } = this.props
        const body = this.state.isOpen ? <div>{article.text} <CommentList comments = {article.comments} /></div> : null
        return (
            <section>
                <h3 style = {{cursor: 'pointer'}} onClick = {this.handleClick}>{article.title}</h3>
                {body}
            </section>
        )
    }

    handleClick = ev => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default Article
