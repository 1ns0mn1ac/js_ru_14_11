import { combineReducers } from 'redux'
import articles from './articles'
import count from './counter'
import filters from './filters'

export default combineReducers({
    articles,
    count,
    filters
})
