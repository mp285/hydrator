import fs from 'fs'
import Twit from 'twit' 
import {createReadStream} from 'fs'
import {createInterface} from 'readline'

export function checkTweetIdFile(path) {
  return new Promise(
    function(resolve, reject) {
      var linereader = createInterface({input: createReadStream(path)}) 
      var count = 0
      linereader.on('line', function(line) {
        count += 1
        if (! line.match(/^[0-9]+$/)) {
          reject("invalid tweet id on line " + count + ' in ' + path)
        }
      })
      linereader.on('close', function() {
        resolve(count)
      })
    })
}

export function hydrateTweets(inputPath, outputPath, auth, startLine=0, endLine=100) {
  return readTweetIds(inputPath, startLine, endLine)
    .then(function(tweetIds) {
      return fetchTweets(tweetIds, auth)
    })
    .catch(function(err) {
      console.log("fetch tweets error: " + err)
    })
    .then(function(result) {
      return writeTweets(result.tweetIds, result.tweets, outputPath)
    })
}

function readTweetIds(inputPath, startLine, endLine) {
  return new Promise(
    function(resolve, reject) {
      var pos = 0
      var lines = []
      var linereader = createInterface({input: createReadStream(inputPath)})
      linereader.on('line', function(line) {
        if (pos >= startLine && pos < endLine) {
          lines.push(line.toString())
        } 
        if (pos == endLine) {
          linereader.close()
        }
        pos += 1
      })
      linereader.on('close', function() {
        resolve(lines)
      })
    }
  )
}

function fetchTweets(tweetIds, auth) {
  var twitter = Twit({
    consumer_key: auth.consumer_key,
    consumer_secret: auth.consumer_secret,
    access_token: auth.access_token,
    access_token_secret: auth.access_token_secret
  })
  var ids = tweetIds.join(',')
  return new Promise(
    function(resolve, reject) {
      return twitter.post('/statuses/lookup', {id: ids})
        .then(function(response) {
          resolve({tweetIds, tweetIds, tweets: response.data})
        })
        .catch(function(err) {
          reject(err)
        })
    }
  )
}

function writeTweets(tweetIds, tweets, outputPath) {
  return new Promise(
    function (resolve, reject) {
      var out = fs.createWriteStream(outputPath, {'flags': 'a'})
      for (var tweet of tweets) {
        out.write(JSON.stringify(tweet) + "\n")
      }
      out.end()
      resolve({
        idsRead: tweetIds.length,
        tweetsHydrated: tweets.length
      })
    }
  )
}

