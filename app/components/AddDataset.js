import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import styles from './AddDataset.css'

const {dialog} = require('electron').remote


export default class AddDataset extends Component {

  static propTypes = {
    chooseFile: PropTypes.func.isRequired,
    addDataset: PropTypes.func.isRequired
  }

  render() {

    let path, title, creator, publisher, url

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
            this.props.addDataset(this.props.selectedFile, title.value, creator.value, publisher.value, url.value)
            this.props.router.push("/datasets") 
          }}> 
            <button onClick={ (e) => {
              let files = dialog.showOpenDialog()
              this.props.chooseFile(files[0])
            } }>Select Tweet ID file</button>
            <br />
            <br />
            <div className={styles.selectedFile}>{ this.props.selectedFile }</div>
            <br />
            <br />
            <label htmlFor="title">Title:</label>
            <input ref={node => title = node} id="title" name="title" type="text" required></input>
            <label htmlFor="creator">Creator:</label>
            <input ref={node => creator = node} id="creator" name="creator" type="text"></input>
            <label htmlFor="publisher">Publisher:</label>
            <input ref={node => publisher = node} id="publisher" name="publisher" type="text"></input>
            <label htmlFor="url">URL:</label>
            <input ref={node => url = node} id="url" name="url" type="url"></input>
            <br />
            <br />
            <button>Add Dataset</button>
          </form>
        </div>
      </div>
    );
  }
}