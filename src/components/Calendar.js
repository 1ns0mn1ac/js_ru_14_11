import React, { PropTypes, Component } from 'react'
import moment from 'moment'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'

export default class Calendar extends Component {

  static defaultProps = {
    width: 'auto'
  }

  static propTypes = {
    width: React.PropTypes.string
  }

  state = {
    from: null,
    to: null
  }

  render() {
    const { from, to } = this.state
    const { width } = this.props
    return (
      <div>
        { !from && !to && <p>Please select the <strong>first day</strong>.</p> }
        { from && !to && <p>Please select the <strong>last day</strong>.</p> }
        { from && to &&
          <p>
            You chose from { moment(from).format('L') } to { moment(to).format('L') }.
            { ' ' }<a href="#" onClick = {this.handleResetClick}>Reset</a>
          </p>
        }
        <DayPicker
          style = {{width: width}}
          ref = "daypicker"
          selectedDays = {day => DateUtils.isDayInRange(day, { from, to })}
          onDayClick = {this.handleDayClick}
        />
      </div>
    )
  }

  handleDayClick = (e, day) => {
    const range = DateUtils.addDayToRange(day, this.state)
    this.setState(range)
  }

  handleResetClick = e => {
    e.preventDefault()
    this.setState({
      from: null,
      to: null
    })
  }
}
