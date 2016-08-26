import {CONSK, CONSS} from './settings'
import {hydrateTweets} from '../utils/twitter'

export const ADD_DATASET = 'ADD_DATASET'
export const DELETE_DATASET = 'DELETE_DATASET'
export const CHOOSE_FILE = 'CHOOSE_FILE'
export const PREP_DATASET = 'PREP_DATASET'
export const START_HYDRATION = 'START_HYDRATION'
export const STOP_HYDRATION = 'STOP_HYDRATION'
export const SET_OUTPUT_PATH = 'SET_OUTPUT_PATH'
export const UPDATE_PROGRESS = 'UPDATE_PROGRESS'


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

export function deleteDataset(datasetId) {
  return {
    type: DELETE_DATASET,
    datasetId: datasetId
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
  return {
    type: PREP_DATASET,
    name: name,
    value: value
  }
}

export function startHydration(datasetId) {
  return {
    type: START_HYDRATION,
    datasetId: datasetId
  }
}

export function stopHydration(datasetId) {
  return {
    type: STOP_HYDRATION,
    datasetId: datasetId
  }
}

export function setOutputPath(datasetId, path) {
  return {
    type: SET_OUTPUT_PATH,
    datasetId: datasetId,
    path: path 
  }
}

export function hydrate() {
  return function(dispatch, getState) {
    var state = getState()
    var eligible = state.datasets.filter((d) => d.hydrating == true)
    if (eligible.length == 0) {
      console.log("no datasets are hydrating")
      return
    }
    // TODO: randomly pick one?
    var dataset = eligible[0]
    var auth = {
      consumer_key: CONSK,
      consumer_secret: CONSS,
      access_token: state.settings.twitterAccessKey,
      access_token_secret: state.settings.twitterAccessSecret,
    }
    hydrateTweets(dataset.path, dataset.outputPath, auth)
      .then(function(result) {
        console.log(result)
        dispatch(updateProgress(dataset.id, result.tweetsHydrated))
      }).catch(function(err) {
        console.log(err)
      })
  }
}

export function updateProgress(datasetId, tweetsHydrated) {
  return {
    type: UPDATE_PROGRESS,
    datasetId: datasetId,
    tweetsHydrated: tweetsHydrated
  }
}