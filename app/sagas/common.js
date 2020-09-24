import { finishLoading, startLoading } from 'app/actions/LoadingActions';
import { put, call, delay } from 'redux-saga/effects';

export function* apiSaga(api, asyncAction, options, loop = false) {
  let success = false;
  do {
    yield put(asyncAction.request());
    yield put(startLoading(asyncAction().type));
    try {
      const payload = options && options.apiPayload;
      const onSuccess = options && options.onSuccess;
      const result = yield call(api, payload);

      yield put(asyncAction.success({ result, ...payload }));
      if (typeof onSuccess === 'function') {
        yield call(onSuccess);
      }
      success = true;
    } catch (error) {
      console.warn(error);
      const failAction = asyncAction.fail({ error });
      yield call(errorHandler, failAction);
      yield put(failAction);
    } finally {
      yield put(finishLoading(asyncAction().type));
    }
  } while (loop && !success);
}

const openModal = ({ action, error }) => {
  console.warn(error);
  console.warn(action);
};

function* errorHandler(failAction) {
  const error = failAction.payload.error;
  openModal({ action: failAction, error: error });
}
