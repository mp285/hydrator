import React, { Component } from 'react'

export default class Dataset extends Component {
  render() {
    return (
      <li onClick={this.props.onClick}>
        {this.props.title}
      </li>
    );
  }
}
