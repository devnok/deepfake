/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
  isFake: false,
  info: {},
  progress: null,
};

export const loginReducer = createReducer(initialState, {
  [types.CHECK_REQUEST](state, action) {
    return {
      ...state,
    };
  },
  [types.CHECK_LOADING_ENDED](state) {
    return { ...state };
  },
  [types.CHECK_STATE_CHANGED](state) {
    return {
      ...state,
      info: state.info,
      progress: state.progress,
    };
  },
  [types.CHECK_SUCCESS](state, action) {
    return {
      ...state,
      isFake: action.isFake,
      info: action.info,
    };
  },
  [types.CHECK_FAILED](state) {
    return {
      ...state,
      isFake: false,
    };
  },
});
