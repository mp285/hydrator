import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import styles from './Dataset.css'

export default class Dataset extends Component {
  render() {
    return (
      <item>
        {this.props.id } / {this.props.title} / {this.props.creator} / {this.props.path}
      </item>
    )
  }
 } 