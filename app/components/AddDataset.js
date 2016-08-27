import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import styles from './AddDataset.css'

const {dialog} = require('electron').remote


export default class AddDataset extends Component {

  static propTypes = {
    chooseFile: PropTypes.func.isRequired,
    checkFile: PropTypes.func.isRequired,
    addDataset: PropTypes.func.isRequired,
    prepDataset: PropTypes.func.isRequired,
  }

  componentWillMount() { 
   if (! this.props.twitterAccessKey) {
      this.props.router.push("/settings") 
    }
  }

  render() {
    return (
      <div>
        <div className={styles.container}>
          <details open>
            <summary>Add a New Dataset</summary>
            <p>
            <em>Hydrate</em> a new dataset by selecting a file of tweet identfiers
            and entering some descriptive information about your new dataset.
            </p>
          </details>
          <form onSubmit={(e) => {
            e.preventDefault()
            this.props.addDataset(this.props.selectedFile, this.props.numTweetIds, title.value, creator.value, publisher.value, url.value)
            this.props.router.push("/datasets") 
          }}> 
            <button onClick={ (e) => {
              let files = dialog.showOpenDialog()
              if (files && files.length == 1) {
                this.props.chooseFile(files[0])
                this.props.checkFile(files[0])
              }
            }}>Select Tweet ID file</button>
            <br />
            <br />
            <label htmlFor="title">Title:</label>
            <input id="title" name="title" type="text" onChange={ this.props.prepDataset } value={ this.props.title } required></input>
            <label htmlFor="creator">Creator:</label>
            <input id="creator" name="creator" type="text" onChange={ this.props.prepDataset } value={ this.props.creator }></input>
            <label htmlFor="publisher">Publisher:</label>
            <input id="publisher" name="publisher" type="text" onChange={ this.props.prepDataset } value={ this.props.publisher }></input>
            <label htmlFor="url">URL:</label>
            <input id="url" name="url" type="url" onChange={ this.props.prepDataset } value={ this.props.url }></input>
            <label>Number of Tweet IDs:</label>
            <div>{ this.props.numTweetIds }</div>
            <br />
            <label>Path:</label>
            <div>{ this.props.selectedFile }</div>
            <br />
            <br />
            <button>Add Dataset</button>
          </form>
        </div>
      </div>
    );
  }
}