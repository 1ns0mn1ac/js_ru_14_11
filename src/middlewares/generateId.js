export default store => next => action => {
    const { type, payload } = action

  if (type === 'CREATE_COMMENT') {
    payload.comment.id = store.getState().comments.last().id + 1
  }

  next(action)
}
