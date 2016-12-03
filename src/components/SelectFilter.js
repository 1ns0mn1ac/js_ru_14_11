import React, { Component, PropTypes } from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import { changeSelection } from '../AC/filters'

import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        //from connect
        changeSelection: PropTypes.array
    }

    handleChange = selected => this.props.changeSelection(selected.map(option => option.value))

    render() {
        const { articles, selected } = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={selected}
            multi={true}
            onChange={this.handleChange}
        />
    }
}

export default connect(state => {
  const { articles, filters } = state
  const selected = filters.selected
  const { from, to } = filters.dateRange

  return {
    selected: selected,
    articles: articles.toArray().filter(article => {
      const published = Date.parse(article.date)
      return (!from || !to || (published > from && published < to))
    })
  }
}, { changeSelection })(SelectFilter)
