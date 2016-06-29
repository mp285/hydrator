import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import AddDataset from '../components/AddDataset';
import * as AddDatasetActions from '../actions/AddDataset.js';

function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(AddDatasetActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddDataset);

/*
export default class AddDatasetPage extends Component {
  render() {
    return (
      <div>
        <AddDataset />
      </div>
    );
  }
  }
  */
