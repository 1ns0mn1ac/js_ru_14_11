import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList'
import SelectFilter from './SelectFilter'
import Chart from './Chart'
import DateRange from './DateRange'
import Counter from './Counter'
import 'react-select/dist/react-select.css'

class App extends Component {

    state = {
        selected: null
    }

    render() {
        const options = [].map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                <Counter />
                <Chart />
                <DateRange />
                <SelectFilter />
                <ArticleList />

            </div>
        )
    }

    handleChange = selected => this.setState({ selected })
}

export default App
