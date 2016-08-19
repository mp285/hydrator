import { ADD_DATASET, START_HYDRATION, STOP_HYDRATION } from '../actions/dataset'

function pickDataset(datasets, datasetId) {
  let i = 0;
  for (var d of datasets) {
    if (d.id == datasetId) {
      return { dataset: {...d}, pos: i}
    }
    i += 1
  }
  return null
}

export default function dataset(state = [], action) {
  switch (action.type) {
    case ADD_DATASET:
      let id = state.length + 1
      return [
        ...state,
        {
          id: id,
          path: action.path,
          title: action.title,
          creator: action.creator,
          publisher: action.publisher,
          url: action.url,
          hydrating: false
        } 
      ] 
    case START_HYDRATION:
      var d = pickDataset(state, action.datasetId)
      d.dataset.hydrating = true
      return [
        ...state.slice(0, d.pos),
        d.dataset,
        ...state.slice(d.pos + 1)
      ]
    case STOP_HYDRATION:
      var d = pickDataset(state, action.datasetId)
      d.dataset.hydrating = false
      console.log(d)
      return [
        ...state.slice(0, d.pos),
        d.dataset,
        ...state.slice(d.pos + 1)
      ]
    default:
      return state;
  }
}