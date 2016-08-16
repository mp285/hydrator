import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import counter from './counter'
import datasets from './datasets'
import settings from  './settings'

const rootReducer = combineReducers({
  datasets,
  settings,
  routing
})

export default rootReducer
