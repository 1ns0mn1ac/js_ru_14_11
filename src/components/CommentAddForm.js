import React, { Component, PropTypes } from 'react'

export default class CommentAddForm extends Component {

  static propTypes = {
    articleId: React.PropTypes.string.isRequired,
  }

  state = {
    comment: '',
    title: '',
    user: ''
  }

  render() {
    return (
      <form action = "commentAdd.action" method = "POST" onSubmit = {this.handleSubmit}>
        {this.renderUserField()}
        <br />
        {this.renderTitleField()}
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

  renderTitleField() {
    return <input
      required
      name = "title"
      value = {this.state.title}
      onChange = {this.handleChange}
      placeholder = "Enter title"
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
    //ок, но лучше бы сделать через карринг, чем targt.name
    [e.target.name]: e.target.value
  })

  handleSubmit = e => {
    e.preventDefault()
    const { articleId } = this.props
    const { comment, title, user } = this.state

    console.log(`Created comment "${comment}" with title "${title}" by ${user} for article: ${articleId} `)

    this.setState({
      comment: '',
      title: '',
      user: ''
    })
  }

}
