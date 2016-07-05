import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import counter from './counter'
import datasets from './datasets'

const rootReducer = combineReducers({
  datasets,
  routing
})

export default rootReducer
