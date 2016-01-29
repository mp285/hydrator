import React, { Component, PropTypes } from 'react'
import Dataset from './Dataset'

export default class DatasetList extends Component {
  render() {
    console.log(this.props.datasets);
    return (
      <ul>
        {this.props.datasets.map(dataset => 
          <Dataset key={dataset.id} 
            {...dataset}
            onClick={() => this.props.onDatasetClick(dataset.id)} />
        )}
      </ul>
    )
  }
}

DatasetList.propTypes = {
  datasets: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired).isRequired
}
