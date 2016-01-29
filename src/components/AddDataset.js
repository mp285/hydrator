import React, { Component, PropTypes } from 'react'

export default class AddDataset extends Component {
  render() {
    return (
      <div>
        <input name="datasetPath" type="file" ref="input" onChange={e => this.handleClick(e)} />
      </div>
    )
  }

  handleClick(e) {
    const node = this.refs.input
    const text = node.value.trim()
    this.props.onAddClick(text)
    node.value = ''
  }
}

AddDataset.propTypes = {
  onAddClick: PropTypes.func.isRequired
}
