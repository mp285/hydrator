import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import styles from './Dataset.css'

const {dialog} = require('electron').remote

var ProgressBar = (props) => {
  let complete = Math.ceil(props.idsRead / props.numTweetIds)
  let style = {width: complete + "%"}
  console.log(props)
  return(
    <div className={styles.bar}>
      <div className={styles.progress} style={style}><span>&nbsp;{props.idsRead}/{props.numTweetIds} ids read ({props.tweetsHydrated} hydrated)</span>{props.idsHydrated}</div>
    </div>
  )
}

var StartButton = (props) => {
  return <button onClick={props.onClick} className={styles.start}>Start</button>
}

var StopButton = (props) => {
  return <button onClick={props.onClick} className={styles.stop}>Stop</button>
}

export default class Dataset extends Component {
  static propTypes = {
    startHydration: PropTypes.func.isRequired,
    stopHydration: PropTypes.func.isRequired,
    setOutputPath: PropTypes.func.isRequired
  }

  render() {
    if (this.props.hydrating) {
      var startStopButton = <StopButton onClick={(e) => this.props.stopHydration(this.props.id)} />
    } else {
      var startStopButton = <StartButton onClick={(e) => {
        if (! this.props.outputPath) {
          let file = dialog.showSaveDialog({title: "Write Tweet JSON to:"})
          if (file) {
            this.props.setOutputPath(this.props.id, file)
          } else {
            return
          }
        }
        this.props.startHydration(this.props.id)
      }}/>
    }
    return (
      <item className={styles.container}>
        <span className={styles.title}>{this.props.title}</span>
        <br />
        <ProgressBar 
          numTweetIds={this.props.numTweetIds} 
          idsRead={this.props.idsRead} 
          tweetsHydrated={this.props.tweetsHydrated} />
        {startStopButton}
        <button className={styles.delete} onClick={(e) => this.props.deleteDataset(this.props.id)}>Delete</button>
      </item>
    )
  }
 } 