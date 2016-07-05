import { ADD_DATASET } from '../actions/dataset';

export default function dataset(state = [], action) {
  switch (action.type) {
    case ADD_DATASET:
      let id = state.length + 1
      state.push({
        id: id,
        title: action.title,
        creator: action.creator,
        publisher: action.publisher,
        url: action.url
      });
      return state;
    default:
      return state;
  }
}