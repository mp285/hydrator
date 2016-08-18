import { CHOOSE_FILE, ADD_DATASET, PREP_DATASET } from '../actions/dataset'

let initialState = {
  selectedFile: "",
  title: "",
  creator: "",
  publisher: "",
  url: "",
}

export default function newDataset(state = initialState, action) {
  switch (action.type) {
    case CHOOSE_FILE: {
      return {
        ...state,
        selectedFile: action.path
      }
    }
    case ADD_DATASET: {
      return initialState
    }
    case PREP_DATASET: {
      let s = {
        ...state
      }
      s[action.name] = action.value
      return s
    }
    default:
      return state
  }
}