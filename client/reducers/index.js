import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import venues from './venues';

const rootReducer = combineReducers({
  venues,
  routing: routerReducer,
});

export default rootReducer;