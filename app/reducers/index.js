/*
 * combines all th existing reducers
 */
import * as DeepfakeReducer from './DeepfakeReducer';
import * as LoadingReducer from './LoadingReducer';
export default Object.assign(DeepfakeReducer, LoadingReducer);
