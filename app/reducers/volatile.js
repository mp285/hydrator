import { CHOOSE_FILE, ADD_DATASET } from '../actions/dataset'

export default function volatile(state = {}, action) {
  switch (action.type) {
    case CHOOSE_FILE: {
      return {
        ...state,
        selectedFile: action.path
      }
    }
    case ADD_DATASET: {
        return {
          ...state,
          selectedFile: null 
        }
    }
    default:
      return state
  }
}