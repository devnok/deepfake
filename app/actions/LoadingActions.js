import { START_LOADING, FINISH_LOADING } from './types';
import { makeActionCreator } from './utils';

export const startLoading = makeActionCreator(START_LOADING);
export const finishLoading = makeActionCreator(FINISH_LOADING);
