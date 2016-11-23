import React, { Component, PropTypes }  from 'react'
import Article from './Article'
import accordion from '../decorators/accordion'

class ArticleList extends Component {

    static propTypes = {
      articles: PropTypes.arrayOf(PropTypes.object).isRequired,
      activeSectionId: PropTypes.string,
      //потому, что activeSectionId по дефолту у тебя == null
      /* Не понимаю, почему когда я пишу isRequired для toggleSection
      * в консоле ругается "The prop `toggleSection` is marked as required in `Accordion`"
      * хотя аналогичная запись в CommentList не выдаёт Warning в декораторе
      */
      toggleSection: PropTypes.func.isRequired
    }

    render() {
        return (
            <ul>
                {this.getList()}
            </ul>
        )
    }

    getList() {
      const { articles, activeSectionId, toggleSection } = this.props

      return articles.map(article => (
          <li key = {article.id}>
              <Article
                  article = {article}
                  isOpen = {article.id == activeSectionId}
                  toggleOpen = {toggleSection(article.id)}
              />
          </li>
      ))
    }
}

export default accordion(ArticleList)
