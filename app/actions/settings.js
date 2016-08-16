import TwitterPinAuth from 'twitter-pin-auth'

const remote = require('electron').remote

export const ADD_SETTINGS = 'ADD_SETTINGS'
export const GET_TWITTER_AUTH_URL = 'GET_TWITTER_AUTH_URL'
export const SET_TWITTER_AUTH_URL = 'SET_TWITTER_AUTH_URL'
export const SET_TWITTER_PIN = 'SET_TWITTER_PIN'
export const GET_TWITTER_CREDENTIALS = 'GET_TWITTER_CREDENTIALS'
export const SET_TWITTER_CREDENTIALS = 'SET_TWITTER_CREDENTIALS'

let twitterPinAuth = new TwitterPinAuth(
  'J2Rx3kNtBe1NwTOffGDRtiTnx',
  'guF3efhWLWrlHkMuOu7Ff4cZk1yhyfjdIjuRfjP0YKS4seRAiR'
)

export function getTwitterAuthUrl() {
  return function(dispatch) {
    twitterPinAuth.requestAuthUrl().
      then(function(url) {
        remote.shell.openExternal(url)
        dispatch(setTwitterAuthUrl(url))
      }).catch(function(err){ 
        console.error(err)
      })
  }
}

export function setTwitterAuthUrl(url) {
  return {
    type: SET_TWITTER_AUTH_URL,
    twitterAuthUrl: url
  }
}

export function setTwitterPin(pin) {
  return {
    type: SET_TWITTER_PIN,
    twitterPin: pin
  }
}

export function getTwitterCredentials(pin) {
  return function(dispatch) {
    twitterPinAuth.authorize(pin)
      .then(function(credentials) {
        console.log(twitterPinAuth._data)
        dispatch(setTwitterCredentials(credentials))
      }).catch(function(err) {
        console.error(err)
      })
  }
}

export function setTwitterCredentials(credentials) {
  return {
    type: SET_TWITTER_CREDENTIALS,
    twitterAccessKey: credentials.accessTokenKey,
    twitterAccessSecret: credentials.accessTokenSecret
  }
}