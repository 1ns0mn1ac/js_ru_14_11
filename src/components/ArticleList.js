import React, { Component }  from 'react'
import Article from './Article'
import openArticle from '../decorators/openArticle'

class ArticleList extends Component {

    render() {
        return (
            <ul>
                {this.getList()}
            </ul>
        )
    }

    getList() {
      const { articles, openArticleId, openArticle } = this.props

      return articles.map(article => (
          <li key = {article.id}>
              <Article
                  article = {article}
                  isOpen = {article.id == openArticleId}
                  toggleOpen = {openArticle(article.id)}
              />
          </li>
      ))
    }
}

export default openArticle(ArticleList)
