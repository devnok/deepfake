import { makeActionCreator, makeAsyncActionCreator } from './utils';
import { deepfakeTypes } from './types';

export const uploadVideo = makeAsyncActionCreator(deepfakeTypes.UPLOAD_VIDEO);
export const uploadImage = makeAsyncActionCreator(deepfakeTypes.UPLOAD_IMAGE);
export const isVideoDone = makeAsyncActionCreator(deepfakeTypes.IS_VIDEO_DONE);
export const isImageDone = makeAsyncActionCreator(deepfakeTypes.IS_IMAGE_DONE);
export const fetchVideo = makeAsyncActionCreator(deepfakeTypes.FETCH_VIDEO);
export const fetchImage = makeAsyncActionCreator(deepfakeTypes.FETCH_IMAGE);
export const fetchDetects = makeAsyncActionCreator(deepfakeTypes.FETCH_DETECTS);
export const setVideo = makeActionCreator(deepfakeTypes.SET_VIDEO);
export const setVideoDone = makeActionCreator(deepfakeTypes.SET_VIDEO_DONE);
export const stopIsVideoDone = makeActionCreator(deepfakeTypes.STOP_IS_VIDEO_DONE);
