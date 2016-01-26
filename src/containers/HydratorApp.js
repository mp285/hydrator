import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { addDataset } from '../actions'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MainSection from '../components/MainSection'
import AddDataset from '../components/AddDataset'

class HydratorApp extends Component {
  render() {
    const { dispatch } = this.props
    return (
      <div>
        <Header />
        <MainSection />
        <AddDataset onAddClick={text =>
          dispatch(addDataset(text))
        } />
        <Footer />
      </div>
    );
  }
}

function select(state) {
  return {}
}

export default connect(select)(HydratorApp)
