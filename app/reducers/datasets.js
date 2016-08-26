import { ADD_DATASET, DELETE_DATASET, START_HYDRATION, STOP_HYDRATION, 
         SET_OUTPUT_PATH, FETCH_TWEETS, UPDATE_PROGRESS } 
    from '../actions/dataset'

function pickDataset(datasets, datasetId) {
  let i = 0;
  for (var d of datasets) {
    if (d.id == datasetId) {
      return { dataset: d, pos: i}
    }
    i += 1
  }
  return null
}

function reducedDatasets(datasets, d) {
   return [
      ...datasets.slice(0, d.pos),
      {...d.dataset},
      ...datasets.slice(d.pos + 1)
    ]
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
          hydrating: false,
          numTweetIds: action.numTweetIds,
          idsRead: 0,
          tweetsHydrated: 0
        } 
      ] 

    case DELETE_DATASET:
      var d = pickDataset(state, action.datasetId)
      if (d) {
        return [
          ...state.slice(0, d.pos),
          ...state.slice(d.pos + 1)
        ]
      } else {
        return state
      }
     
    case START_HYDRATION:
      // push some of this logic into pickDataset instead of repeating
      var d = pickDataset(state, action.datasetId)
      if (! d.dataset.outputPath) {
        return state
      }
      console.log("hydrating " + d.dataset.path + " to " + d.dataset.outputPath)
      d.dataset.hydrating = true
      return reducedDatasets(state, d)

    case STOP_HYDRATION:
      var d = pickDataset(state, action.datasetId)
      d.dataset.hydrating = false
      return reducedDatasets(state, d)

    case SET_OUTPUT_PATH:
      var d = pickDataset(state, action.datasetId)
      d.dataset.outputPath = action.path
      return reducedDatasets(state, d)

    case UPDATE_PROGRESS:
      var d = pickDataset(state, action.datasetId)
      d.dataset.idsRead += action.idsRead,
      d.dataset.tweetsHydrated += action.tweetsHydrated
      return reducedDatasets(state, d)

    default:
      return state;

  }
}