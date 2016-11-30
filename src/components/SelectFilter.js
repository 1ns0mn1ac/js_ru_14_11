import React, { Component, PropTypes } from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import { setSelected } from '../AC/filters'

import 'react-select/dist/react-select.css'

class SelectFilter extends Component {

  static PropTypes = {
    articles: PropTypes.array.isRequired
  }

  render() {
    const { articles, selected } = this.props
    const options = articles.map(article => ({
      label: article.title,
      value: article.id
    }))

    return <Select
      options = {options}
      value = {selected}
      multi = {true}
      onChange = {this.handleChange}
    />
   }

  handleChange = selected => {
    const { setSelected } = this.props
    setSelected(selected.map(option => option.value))
  }
}


export default connect(state => ({
    selected: state.filters.selected,
    articles: state.articles
}), { setSelected })(SelectFilter)
