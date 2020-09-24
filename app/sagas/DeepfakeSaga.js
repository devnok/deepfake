import { apiSaga } from './common';
import {
  uploadVideo,
  isVideoDone,
  fetchDetects,
  setVideoDone,
  stopIsVideoDone,
} from '../actions/DeepfakeActions';
import * as DeepfakeAPI from '../api/DeepfakeAPI';
import {
  call,
  cancel,
  cancelled,
  delay,
  fork,
  put,
  select,
  take,
} from 'redux-saga/effects';
import { deepfakeTypes } from '../actions/types';

export function* uploadVideoSaga(action) {
  yield call(apiSaga, DeepfakeAPI.uploadVideo, uploadVideo, {
    apiPayload: action.payload,
    onSuccess: action.onSuccess,
  });
}
function* loadSync(options) {
  try {
    const payload = options && options.apiPayload;
    while (true) {
      yield put(isVideoDone.request());
      const isDoneResult = yield call(DeepfakeAPI.isVideoDone, payload);

      if (isDoneResult?.status !== 200) {
        yield put(isVideoDone.success(isDoneResult.data));
        yield put(fetchDetects.request());
        const fdResult = yield call(DeepfakeAPI.fetchDetectsVideo, payload);
        console.log(fdResult.data);
        yield put(fetchDetects.success(fdResult.data));
      } else {
        yield put(setVideoDone(payload));
        yield put(stopIsVideoDone());
      }

      yield delay(1000);
    }
  } catch (e) {
    console.error(e);
  } finally {
    if (yield cancelled()) {
      // something
    }
  }
}
export function* doneVideoSaga(action) {
  let loadSyncTask = null;
  try {
    loadSyncTask = yield fork(loadSync, {
      apiPayload: {
        filename: action.payload.file.name,
      },
    });

    yield take(deepfakeTypes.STOP_IS_VIDEO_DONE);
  } finally {
    if (loadSyncTask) {
      yield cancel(loadSyncTask);
    }
  }
}

export function* fetchDetectsSaga(action) {
  yield call(apiSaga, DeepfakeAPI.fetchDetectsVideo, fetchDetects, {
    apiPayload: {
      filename: action.payload.filename,
    },
    onSuccess: action.onSuccess,
  });
}
