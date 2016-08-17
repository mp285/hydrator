export const ADD_DATASET = 'ADD_DATASET';
export const CHOOSE_FILE = 'CHOOSE_FILE';

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