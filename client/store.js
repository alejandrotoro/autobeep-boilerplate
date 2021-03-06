import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers';

import { fetchVenuesIfNeeded } from './actions'

const loggerMiddleware = createLogger();

const defaultSate = { venues: [] };

const store = createStore(
  rootReducer,
  defaultSate,
  applyMiddleware(thunk, loggerMiddleware)
);

export const history = syncHistoryWithStore(browserHistory, store);

if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default; // eslint-disable-line
    store.replaceReducer(nextRootReducer);
  });
}

export default store;