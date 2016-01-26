import { ADD_DATASET } from '../constants'

function addDataset(title, url) {
  return {
    type: ADD_DATASET,
    title: title,
    url: url
  }
}

export { addDataset }

