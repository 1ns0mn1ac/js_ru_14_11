import { CHANGE_DATE_RANGE, SET_SELECTED } from '../constants'

const initialState = {
    dateRange: {
      from: null,
      to: null
    },
    selected: []
}

export default (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case CHANGE_DATE_RANGE:
            return Object.assign({}, state, {
              dateRange: payload.dateRange
            })

        case SET_SELECTED:
          return Object.assign({}, state, {
            selected: payload.selected
          })
    }

    return state
}
