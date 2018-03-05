// @flow

import {createStore, compose} from 'redux';
import rootReducer from './reducers';
import getInitialState from './state';

const enhancers = [];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  ...enhancers,
);

const store = createStore(
  rootReducer,
  getInitialState(),
  composedEnhancers,
);

export default store;
