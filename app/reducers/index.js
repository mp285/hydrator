import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import datasets from './datasets'
import settings from  './settings'
import newDataset from './newDataset'

const rootReducer = combineReducers({
  datasets,
  newDataset,
  settings,
  routing
})

export default rootReducer
