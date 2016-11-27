import React, { Component, PropTypes } from 'react'

export default class CommentAddForm extends Component {

  static propTypes = {
    articleId: React.PropTypes.string.isRequired,
  }

  state = {
    comment: '',
    user: ''
  }

  render() {
    const {action, method} = this.props

    return (
      <form action = "commentAdd.action" method = "POST" onSubmit = {this.handleSubmit}>
        {this.renderUserField()}
        <br />
        {this.renderCommentField()}
        <br />
        <button>Publish</button>
      </form>
    )
  }

  renderUserField() {
    return <input
      required
      name = "user"
      value = {this.state.user}
      onChange = {this.handleChange}
      placeholder = "Enter user name"
    />
  }

  renderCommentField() {
    return <textarea
      required
      name = "comment"
      value = {this.state.comment}
      onChange = {this.handleChange}
      style = {{width: '200px', height: '50px' }}
      placeholder = "Enter your comment"
    />
  }

  handleChange = e => this.setState({
    [e.target.name]: e.target.value
  })

  handleSubmit = e => {
    e.preventDefault()
    const { articleId } = this.props
    const { comment, user } = this.state

    console.log(`Created comment "${comment}" by ${user} for article: ${articleId} `)

    this.setState({
      comment: '',
      user: ''
    })
  }

}
