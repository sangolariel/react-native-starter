import {all} from 'redux-saga/effects';
import commonSaga from './common/saga';
import feedSaga from './feed/saga';

/**
 * Root saga
 * @returns {IterableIterator<AllEffect | GenericAllEffect<any> | *>}
 */
export default function* rootSagas() {
  yield all([commonSaga(), feedSaga()]);
}
