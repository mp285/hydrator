import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './AddDataset.css';

export default class AddDataset extends Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
          <details open>
            <summary>Add a New Dataset</summary>
            <p>
            Hydrate a new dataset by selecting a file of tweet identfiers
            and adding some metadata about your new dataset.
            </p>
          </details>
          <form>
            <input id="filename" name="filename" type="file" />
            <br />
            <br />
            <label for="title">Title:</label>
            <input id="title" name="title" type="text" required></input>
            <label for="creator">Creator:</label>
            <input id="creator" name="creator" type="text"></input>
            <label for="publisher">Publisher:</label>
            <input id="publisher" name="publisher" type="text"></input>
            <label for="url">URL:</label>
            <input id="url" name="url" type="url"></input>
          </form>
        </div>
      </div>
    );
  }
}
