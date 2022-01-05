import {combineReducers} from 'redux';
import commonReducer from './common/reducer';
import languageReducer from './language/reducer';
import feedReducer from './feed/reducer';

/**
 * Root reducer
 * @type {Reducer<any> | Reducer<any, AnyAction>}
 */
const rootReducers = combineReducers({
  common: commonReducer,
  language: languageReducer,
  feed: feedReducer,
});

export default rootReducers;
