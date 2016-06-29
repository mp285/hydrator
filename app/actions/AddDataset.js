export const ADD_DATASET = 'ADD_DATASET'
export const CHOOSE_FILE = 'CHOOSE_FILE'

export function addDataset() {
  return {
    type: ADD_DATASET
  }
}

export function chooseFile() {
  return {
    type: CHOOSE_FILE
  }
}
