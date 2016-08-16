import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import AddDataset from '../components/AddDataset'
import * as AddDatasetActions from '../actions/dataset'

function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(AddDatasetActions, dispatch)
}

let DecoratedAddDataset = withRouter(AddDataset)

export default connect(mapStateToProps, mapDispatchToProps)(DecoratedAddDataset)