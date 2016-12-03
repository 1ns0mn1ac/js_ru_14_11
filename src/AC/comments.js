import { CREATE_COMMENT } from '../constants'

export function createComment(articleId, comment) {
    return {
        type: CREATE_COMMENT,
        payload: {
          articleId,
          comment
        }
    }
}
