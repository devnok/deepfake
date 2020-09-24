import createReducer from 'app/lib/createReducer';
import { deepfakeTypes } from '../actions/types';

const initialState = {
  video: null,
  detects: [],
  progress: {
    frames: 0,
    totalframes: 0,
  },
  detectAt: {
    startAt: null,
    endAt: null,
  },
};

export const deepfakeReducer = createReducer(initialState, {
  [deepfakeTypes.UPLOAD_VIDEO.REQUEST](state, action) {
    return {
      ...state,
    };
  },
  [deepfakeTypes.UPLOAD_VIDEO.SUCCESS](state, action) {
    return {
      ...state,
      detectAt: {
        startAt: action.payload.startAt,
        endAt: null,
      },
    };
  },
  [deepfakeTypes.UPLOAD_VIDEO.FAIL](state, action) {
    return {
      ...state,
    };
  },
  [deepfakeTypes.SET_VIDEO](state, action) {
    return {
      ...state,
      video: action.payload,
    };
  },
  [deepfakeTypes.IS_VIDEO_DONE.SUCCESS](state, action) {
    if (
      !action.payload ||
      action.payload.frames == null ||
      action.payload.totalframes == null
    )
      return state;
    return {
      ...state,
      progress: {
        frames: action.payload.frames,
        totalframes: action.payload.totalframes,
      },
    };
  },
  [deepfakeTypes.FETCH_DETECTS.SUCCESS](state, action) {
    if (!action.payload || !Array.isArray(action.payload)) return state;
    return {
      ...state,
      detects: action.payload,
    };
  },
  [deepfakeTypes.SET_VIDEO_DONE](state, action) {
    return {
      ...state,
      detectAt: {
        startAt: state.detectAt.startAt,
        endAt: Date.now(),
      },
      progress: {
        frames: state.progress.totalframes,
        totalframes: state.progress.totalframes,
      },
    };
  },
});
