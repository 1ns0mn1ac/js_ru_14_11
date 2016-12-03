import { normalizedArticles } from '../fixtures'
import { DELETE_ARTICLE, CREATE_COMMENT } from '../constants'
import { Map } from 'immutable'

const initialState = normalizedArticles.reduce((acc, article) => {
    return acc.set(article.id, article)
}, new Map({}))

export default (articlesState = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articlesState.delete(payload.articleId)

        case CREATE_COMMENT:
            articlesState.getIn([payload.articleId]).comments.push(payload.comment.id)
              
            return articlesState
    }

    return articlesState
}
