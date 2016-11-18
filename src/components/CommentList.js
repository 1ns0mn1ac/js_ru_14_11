import React, { Component } from 'react'
import Comment from './Comment'

/**
 * Наследуемся от компонента, для управления состоянием
 */

export default class CommentList extends Component {

    constructor() {
      super()
      this.state = {
        isOpen: false
      }
    }

    toggleComments = e => {
      e.preventDefault()

      this.setState({
        isOpen: !this.state.isOpen
      })
    }

    renderComments() {
      return (
        <ul>
          {this.props.comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)}
        </ul>
      )
    }

    renderLink() {
      const { comments } = this.props
      const text = (this.state.isOpen) ? 'hide comments' : `show ${comments.length} comments`

      return (
        <a href="#" onClick = {this.toggleComments}>{text}</a>
      )
    }

    render() {
      const { comments } = this.props

      if (!comments || comments.length === 0) {
        return <div>
          <hr/>
          <i>0 comments</i>
        </div>
      }

      const toggleLink = this.renderLink()
      const commentsBody = (this.state.isOpen) ? this.renderComments() : null

      return (
        <div>
          {toggleLink}
          {commentsBody}
        </div>
      )
    }
}
