import React, { Component, PropTypes } from 'react'

export default class Dataset extends Component {
  render() {
    return (
      <li key={this.props.id}>
        <button>start</button>
        {this.props.title} [{this.props.id}]
      </li>
    );
  }
}

Dataset.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
}
