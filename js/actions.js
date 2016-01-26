export const ADD_DATASET = 'ADD_DATASET'

export function addDataset(title, url) {
  return {
    type: ADD_DATASET,
    title: title,
    url: url
  }
}
