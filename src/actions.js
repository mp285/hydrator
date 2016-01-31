export const ADD_DATASET = 'ADD_DATASET'
export const HYDRATE_STARTED = 'HYDRATE_STARTED'
export const HYDRATE_FAILURE = 'HYDRATE_FAILURE'
export const HYDRATE_SUCCESS = 'HYDRATE_SUCCESS'

let nextDatasetId = 0

export function addDataset(title, url) {
  return {
    type: ADD_DATASET,
    id: nextDatasetId++,
    title: title
  }
}

export function hydrateStarted(dataset) {
  return {
    type: HYDRATE_STARTED,
    dataset
  }
}
