export default store => next => action => {
    const { type, payload } = action
  //лучше придумать более общий способ; через мидлвару будут проходить все экшины, их стоит делать максимально реюзабельными
  //+ пользуйся константами
  if (type === 'CREATE_COMMENT') {
    //Плохая логика для генерации id
    //лучше не мутировать объект
    payload.comment.id = store.getState().comments.last().id + 1
  }

  next(action)
}
