import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import datasets from './datasets'
import settings from  './settings'
import volatile from './volatile'

const rootReducer = combineReducers({
  volatile,
  datasets,
  settings,
  routing
})

export default rootReducer
