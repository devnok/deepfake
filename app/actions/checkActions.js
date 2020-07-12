/*
 * Reducer actions related with check
 */
import * as types from './types';

export function requestCheck() {
  return {
    type: types.CHECK_REQUEST,
  };
}

export function checkFailed() {
  return {
    type: types.CHECK_FAILED,
  };
}

export function checkSuccess() {
  return {
    type: types.CHECK_SUCCESS,
  };
}

export function onCheckStateChanged(response) {
  return {
    type: types.CHECK_STATE_CHANGED,
    response,
  };
}
