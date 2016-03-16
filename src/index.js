import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import createStore from './store'
import { addDataset } from './actions'

import HydratorApp from './containers/HydratorApp'

const store = createStore();

render(
  <Provider store={store}>
    <HydratorApp />
  </Provider>,
  document.getElementById('app')
);
