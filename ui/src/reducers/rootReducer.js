import { combineReducers } from 'redux';

import errorReducer from '../features/errors/errorReducer';

const rootReducer = combineReducers({
  errors: errorReducer
});

export default rootReducer;