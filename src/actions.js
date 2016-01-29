export const ADD_DATASET = 'ADD_DATASET'

let nextDatasetId = 0

export function addDataset(title, url) {
  return {
    type: ADD_DATASET,
    id: nextDatasetId++,
    title: title
  }
}
