import {combineReducers} from 'redux';
import commonReducer from './common/reducer';
import languageReducer from './language/reducer';
import newsReducer from './news/reducer';
import scheduleReducer from './schedule/reducer';
import videoReducer from './video/reducer';
import podcastReducer from './podcast/reducer';
import appReducer from './app/reducer';
import authReducer from './auth/reducer';
import adsReducer from './ads/reducer';
import storageReducer from './storage/reducer';

/**
 * Root reducer
 * @type {Reducer<any> | Reducer<any, AnyAction>}
 */
const rootReducers = combineReducers({
  common: commonReducer,
  language: languageReducer,
  news: newsReducer,
  schedule: scheduleReducer,
  video: videoReducer,
  podcast: podcastReducer,
  app: appReducer,
  auth: authReducer,
  ads: adsReducer,
  storage: storageReducer,
});

export default rootReducers;
