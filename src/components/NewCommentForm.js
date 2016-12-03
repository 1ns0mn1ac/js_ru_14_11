import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

export default class NewCommentForm extends Component {
    state = {
        text: '',
        title: '',
        user: ''
    }

    handleChange = field => ev => {
        if (ev.target.value.length > 5) return
        this.setState({
            [field]: ev.target.value
        })
    }

    handleSubmit = ev => {
        ev.preventDefault()
        const { createComment, articleId } = this.props

        createComment(articleId, this.state)

        this.setState({
            user: '',
            title: '',
            text: ''
        })
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                comment: <input required type="text" value={this.state.text} onChange = {this.handleChange('text')}/>
                title: <input type="text" value={this.state.title} onChange = {this.handleChange('title')}/>
                user: <input required type="text" value={this.state.user} onChange = {this.handleChange('user')}/>
                <input type = "submit"/>
            </form>
        )
    }
}
