import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import variablesReducer from './modules/variables';

export default combineReducers({
  routing: routerReducer,
  variables: variablesReducer
});
