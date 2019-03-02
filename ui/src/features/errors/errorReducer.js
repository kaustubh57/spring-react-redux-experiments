import { merge } from 'lodash';

import { createReducer } from '../../common/utils/reducerUtils';
import { GET_ERRORS } from './errorConstants';

const initialState = {};

export function getErrors (state = initialState, payload) {
  return merge({}, state, {payload});
}

export default createReducer(initialState,
  {
    [GET_ERRORS]: getErrors,
  }
);