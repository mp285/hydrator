import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { addDataset } from '../actions'
import Header from '../components/Header'
import Footer from '../components/Footer'
import DatasetList from '../components/DatasetList'
import AddDataset from '../components/AddDataset'

class HydratorApp extends Component {
  render() {
    const { dispatch, datasets } = this.props
    return (
      <div>
        <Header />
        <AddDataset onAddClick={text =>
          dispatch(addDataset(text))
        } />
        <DatasetList datasets={datasets} />
        <Footer />
      </div>
    );
  }
}

function select(state) {
  return {
    datasets: state.datasets
  }
}

export default connect(select)(HydratorApp)
