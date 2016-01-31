import React, { Component, PropTypes } from 'react'

let remote = window.require('remote')

export default class AddDataset extends Component {

  render() {
    return (
      <div>
        <button id="addDataset" onClick={e => this.addDataset(e)}>Add Dataset</button><br />
      </div>
    )
  }

  addDataset(e) {
    let dialog = remote.require('dialog')
    dialog.showOpenDialog(filenames => {
      for (let filename of filenames) {
        this.props.onAddClick(filename)
      }
    })
  }

}

AddDataset.propTypes = {
  onAddClick: PropTypes.func.isRequired
}
