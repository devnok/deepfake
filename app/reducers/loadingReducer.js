import { FINISH_LOADING, START_LOADING } from 'app/actions/types';
import createReducer from 'app/lib/createReducer';

const initialState = {};

export const LoadingReducer = createReducer(initialState, {
  [START_LOADING]: (state, action) => ({
    ...state,
    [action.payload]: true,
  }),
  [FINISH_LOADING]: (state, action) => ({
    ...state,
    [action.payload]: false,
  }),
});
