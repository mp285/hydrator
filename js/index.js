'use strict';

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import createStore from './store'
import { addDataset } from './actions'
import { HydratorApp } from './components/HydratorApp'

const store = createStore();

let unsub = store.subscribe(() => 
  console.log(store.getState())
);

render(
  <Provider store={store}>
    <HydratorApp />
  </Provider>,
  document.getElementById('app')
);

store.dispatch(addDataset('test', 'example.com'));
store.dispatch(addDataset('testing', 'example.org'));

unsub();
