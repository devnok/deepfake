/**
 *  Redux saga class init
 */
import { takeEvery, all, takeLatest } from 'redux-saga/effects';
import * as types from '../actions/types';
import {
  doneVideoSaga,
  fetchDetectsSaga,
  uploadVideoSaga,
} from './DeepfakeSaga';

export default function* watch() {
  yield all([
    takeLatest(types.deepfakeTypes.UPLOAD_VIDEO.INDEX, uploadVideoSaga),
    takeLatest(types.deepfakeTypes.UPLOAD_VIDEO.SUCCESS, doneVideoSaga),
    takeLatest(types.deepfakeTypes.SET_VIDEO_DONE, fetchDetectsSaga),
  ]);
}
