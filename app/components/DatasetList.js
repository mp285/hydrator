import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Dataset from './Dataset'
import styles from './DatasetList.css';

export default class DatasetList extends Component {

  static propTypes = {
    datasets: PropTypes.array.isRequired
  }

  componentWillMount() { 
   if (this.props.datasets.length == 0) {
      this.props.router.push("/add") 
    }
  }

  render() {
     return (
      <div className={styles.container}>
        <p>
        Below are tweet datasets that you have added 
        </p>
        <ul>
          {this.props.datasets.map(dataset => 
            <li key={dataset.id}><Dataset {...dataset} /></li>
          )}
        </ul>
      </div>
    )
  }
}
