import { CHOOSE_FILE, SET_NUM_TWEET_IDS, SET_FILE_CHECK_ERROR, 
         ADD_DATASET, PREP_DATASET } from '../actions/dataset'

let initialState = {
  selectedFile: "",
  title: "",
  creator: "",
  publisher: "",
  url: "",
  lineCount: ""
}

export default function newDataset(state = initialState, action) {
  switch (action.type) {

    case CHOOSE_FILE: {
      return {
        ...state,
        selectedFile: action.path
      }
    }

    case SET_NUM_TWEET_IDS: {
      return {
        ...state,
        numTweetIds: action.numTweetIds
      }
    }

    case SET_FILE_CHECK_ERROR: {
      return {
        ...state,
        selectedFile: null,
        lineCount: null
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