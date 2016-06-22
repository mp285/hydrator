import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import AddDataset from '../components/AddDataset';


export default class AddDatasetPage extends Component {
  render() {
    return (
      <div>
        <AddDataset />
      </div>
    );
  }
}
