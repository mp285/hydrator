import { combineReducers } from 'redux'
import { ADD_DATASET } from './actions'

function dataset(state, action) {
  switch (action.type) {
    case ADD_DATASET:
      return {
        id: action.id,
        title: action.title,
      }
    default:
      return state
  }
}

function datasets(state = [], action) {
  switch (action.type) {
    case ADD_DATASET:
      console.log("adding", state)
      return [
          ...state,
          dataset(undefined, action)
      ]
    default:
      return state;
  }
}

const hydratorApp = combineReducers({
  datasets
})

export default hydratorApp
