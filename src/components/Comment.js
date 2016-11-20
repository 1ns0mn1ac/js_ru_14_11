import React  from 'react'

/**
 * Делаем компонент в виде простой функции,
 * так как его задача отобразить данные в заданном формате
 */

const Comment = props => {
  const { comment } = props
  const title = (comment.title) ? <strong  style = {{display: 'block'}} >{comment.title}</strong> : null

  return(
    <div style = {{fontSize: '.9em'}}>
      <strong>{comment.user}</strong>
      <div style = {{fontSize: '.8em'}}>{title}{comment.text}</div>
    </div>
  )
}

export default Comment
