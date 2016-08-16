import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './Settings.css';


export default class Settings extends Component {

  static propTypes = {
    getTwitterAuthUrl: PropTypes.func.isRequired,
    getTwitterCredentials: PropTypes.func.isRequired
  }

  render() {

    let pin = null

    if (this.props.settings.twitterAuthUrl) {
       var form = 
        <form onSubmit = {(e) => {
          e.preventDefault()
          this.props.getTwitterCredentials(pin.value)
          }}>
          <input ref={node => pin = node} name="twitterPin" id="twitterPin" placeholder="PIN" maxLength="7" size="8" type="text" />
          &nbsp; &nbsp; &nbsp;
          <button>Submit PIN</button>
        </form>
    } else {
      var form = 
        <form onSubmit = {(e) => {
          e.preventDefault()
          this.props.getTwitterAuthUrl()
          }}>
          <button>Link Twitter Account</button>
        </form>
    }

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
          { form }
          <br />
          <br />
          <label for="username">Username:</label>
          <div>{ this.props.settings.username }</div>
          <br />
          <label for="accessKey">Access Key:</label>
          <div className={styles.keys}>{ this.props.settings.twitterAccessKey }</div>
          <br />
          <label for="accessKeySecret">Access Key Secret:</label>
          <div className={styles.keys}>{ this.props.settings.twitterAccessSecret }</div>
        </div>
      </div>
    );
  }
}
