export const ADD_DATASET = 'ADD_DATASET'
export const CHOOSE_FILE = 'CHOOSE_FILE'
export const PREP_DATASET = 'PREP_DATASET'

export function addDataset(path, title, creator, publisher, url) {
  return {
    type: ADD_DATASET,
    path: path,
    title: title,
    creator: creator,
    publisher: publisher,
    url: url
  }
}

export function chooseFile(path) {
  return {
    type: CHOOSE_FILE,
    path: path
  }
}

export function prepDataset(event) {
  var name = event.target.name
  var value = event.target.value
  console.log('name', name, 'xxx', 'value', value)
  return {
    type: PREP_DATASET,
    name: name,
    value: value
  }
}