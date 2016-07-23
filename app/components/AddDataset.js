import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './AddDataset.css';

export default class AddDataset extends Component {

  static propTypes = {
    addDataset: PropTypes.func.isRequired
  }

  render() {

    let title, creator, publisher, url

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
            this.props.addDataset(title.value, creator.value, publisher.value, url.value)
          }}> 
            <input id="filename" name="filename" type="file" />
            <br />
            <br />
            <label for="title">Title:</label>
            <input ref={node => title = node} id="title" name="title" type="text" required></input>
            <label for="creator">Creator:</label>
            <input ref={node => creator = node} id="creator" name="creator" type="text"></input>
            <label for="publisher">Publisher:</label>
            <input ref={node => publisher = node} id="publisher" name="publisher" type="text"></input>
            <label for="url">URL:</label>
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