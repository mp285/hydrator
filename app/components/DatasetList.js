import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Dataset from './Dataset'
import styles from './DatasetList.css';

export default class DatasetList extends Component {

  static propTypes = {
    datasets: PropTypes.array.isRequired,
    startHydration: PropTypes.func.isRequired,
    stopHydration: PropTypes.func.isRequired
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
        These are datasets that have been hydrated or are in the process of being hydrated.
        </p>
        <ul>
          {this.props.datasets.map(dataset => 
            <li key={dataset.id}><Dataset {...dataset} 
              startHydration={this.props.startHydration}
              deleteDataset={this.props.deleteDataset} 
              stopHydration={this.props.stopHydration}
              setOutputPath={this.props.setOutputPath} /></li>
          )}
        </ul>
      </div>
    )
  }
}