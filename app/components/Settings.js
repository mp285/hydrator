import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Settings.css';

export default class Settings extends Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
          <details open>
            <summary>Settings</summary>
            <p>
            These are your settings that control who you connect
            to the Twitter API as, and where to write your data to 
            on your computer.
            </p>
          </details>
          <form>
            <label for="title">Title:</label>
            <input id="title" name="title" type="text" required></input>
            <br />
            <br />
            <button name="save">Save</button>
          </form>
        </div>
      </div>
    );
  }
}
