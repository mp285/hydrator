import {CONSK, CONSS} from './settings'
import {hydrateTweets, checkTweetIdFile} from '../utils/twitter'

export const ADD_DATASET = 'ADD_DATASET'
export const DELETE_DATASET = 'DELETE_DATASET'
export const CHOOSE_FILE = 'CHOOSE_FILE'
export const CHECK_FILE = 'CHECK_FILE'
export const SET_NUM_TWEET_IDS = 'SET_NUM_TWEET_IDS'
export const SET_FILE_CHECK_ERROR = 'SET_FILE_CHECK_ERROR'
export const PREP_DATASET = 'PREP_DATASET'
export const START_HYDRATION = 'START_HYDRATION'
export const STOP_HYDRATION = 'STOP_HYDRATION'
export const SET_OUTPUT_PATH = 'SET_OUTPUT_PATH'
export const UPDATE_PROGRESS = 'UPDATE_PROGRESS'



export function addDataset(path, numTweetIds, title, creator, publisher, url) {
  return {
    type: ADD_DATASET,
    path: path,
    title: title,
    creator: creator,
    publisher: publisher,
    url: url,
    numTweetIds: numTweetIds
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

export function checkFile(path) {
  return function(dispatch, getState) {
    checkTweetIdFile(path)
      .then(function(numTweetIds) {dispatch(setNumTweetIds(numTweetIds))})
      .catch(function(error) {
        var {dialog} = require('electron').remote
        dialog.showErrorBox("Tweet ID File Error", error)
        dispatch(setFileCheckError(error))
      })
  }
}

export function setNumTweetIds(numTweetIds) {
  return {
    type: SET_NUM_TWEET_IDS,
    numTweetIds: numTweetIds
  }
}

export function setFileCheckError(error) {
  return {
    type: SET_FILE_CHECK_ERROR,
    error: error
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
    console.log("hydrating dataset:", dataset)
    var auth = {
      consumer_key: CONSK,
      consumer_secret: CONSS,
      access_token: state.settings.twitterAccessKey,
      access_token_secret: state.settings.twitterAccessSecret,
    }
    hydrateTweets(dataset.path, dataset.outputPath, auth)
      .then(function(result) {
        dispatch(updateProgress(dataset.id, result.idsRead, result.tweetsHydrated))
      }).catch(function(err) {
        console.log(err)
      })
  }
}

export function heartbeat() {
  return dispatch => {
    setTimeout(() => {
      console.log("heartbeat")
      dispatch(heartbeat())
      dispatch(hydrate())
    }, 10000)
  }
}

export function updateProgress(datasetId, idsRead, tweetsHydrated) {
  return {
    type: UPDATE_PROGRESS,
    datasetId: datasetId,
    idsRead: idsRead,
    tweetsHydrated: tweetsHydrated
  }
}