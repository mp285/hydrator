export const ADD_DATASET = 'ADD_DATASET'
export const CHOOSE_FILE = 'CHOOSE_FILE'

export function addDataset(title, creator, publisher, url) {
  console.log(title, creator, publisher, url)
  return {
    type: ADD_DATASET,
    title: title,
    creator: creator,
    publisher: publisher,
    url: url
  }
}

export function chooseFile() {
  return {
    type: CHOOSE_FILE
  }
}
