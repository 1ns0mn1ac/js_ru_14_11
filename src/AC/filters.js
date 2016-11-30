import { CHANGE_DATE_RANGE, SET_SELECTED } from '../constants'

export function changeDateRange(dateRange) {
    return {
        type: CHANGE_DATE_RANGE,
        payload: {
          dateRange
        }
    }
}

export function setSelected(selected) {
    return {
        type: SET_SELECTED,
        payload: {
          selected
        }
    }
}
