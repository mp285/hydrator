import { combineReducers } from 'redux'
import { ADD_DATASET } from './actions'

const initialState = {
  datasets: []
}

function datasets(state = initialState, action) {
  switch (action.type) {
    case ADD_DATASET:
      console.log("adding", state)
      return Object.assign({}, state, {
        datasets: [
          ...state.datasets,
          {
            title: action.title,
            url: action.url,
          }
        ]
      });
    default:
      return state;
  }
}

const hydratorApp = combineReducers({
  datasets
})

export default hydratorApp
