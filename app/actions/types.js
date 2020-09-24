import { makeAsyncActions } from './utils';

export const START_LOADING = 'START_LOADING';
export const FINISH_LOADING = 'FINISH_LOADING';

export const deepfakeTypes = {
  UPLOAD_VIDEO: makeAsyncActions('deepfake/UPLOAD_VIDEO'),
  UPLOAD_IMAGE: makeAsyncActions('deepfake/UPLOAD_IMAGE'),
  IS_VIDEO_DONE: makeAsyncActions('deepfake/IS_VIDEO_DONE'),
  IS_IMAGE_DONE: makeAsyncActions('deepfake/IS_IMAGE_DONE'),
  FETCH_VIDEO: makeAsyncActions('deepfake/FETCH_VIDEO'),
  FETCH_IMAGE: makeAsyncActions('deepfake/FETCH_IMAGE'),
  FETCH_DETECTS: makeAsyncActions('deepfake/FETCH_DETECTS'),
  SET_VIDEO: 'deepfake/SET_VIDEO',
  SET_VIDEO_DONE: 'deepfake/SET_VIDEO_DONE',
  SET_IMAGE_DONE: 'deepfake/SET_IMAGE_DONE',
  STOP_IS_VIDEO_DONE: 'deepfake/STOP_IS_VIDEO_DONE',
};
