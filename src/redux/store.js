import { applyMiddleware, compose, createStore } from 'redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';

import rootReducer from './reducers';

// Enable dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(browserHistory);

// Add the reducer to your store on the `router` key
// Also apply middleware for navigating
export const store = createStore(
  rootReducer,
  {},
  composeEnhancers(
    applyMiddleware(middleware)
  )
);

// Create an enhanced history that syncs navigation events with the store
export const history = syncHistoryWithStore(browserHistory, store);
