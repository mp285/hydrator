import { combineReducers } from 'redux'
import { ADD_DATASET } from '../constants'

const initialState = {
  datasets: []
}

function hydrateApp(state = initialState, action) {
  switch (action.type) {
    case ADD_DATASET:
      console.log("adding dataset")
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

const rootReducer = combineReducers({
  hydrateApp 
})

export default rootReducer
