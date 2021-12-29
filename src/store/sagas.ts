import {all} from 'redux-saga/effects';
import commonSaga from './common/saga';
import newsSaga from './news/saga';
import scheduleSaga from './schedule/saga';
import videoSaga from './video/saga';
import podcastSaga from './podcast/saga';
import appSaga from './app/saga';
import authSaga from './auth/saga';
import adsSaga from './ads/saga';
import storageSaga from './storage/saga';

/**
 * Root saga
 * @returns {IterableIterator<AllEffect | GenericAllEffect<any> | *>}
 */
export default function* rootSagas() {
  yield all([
    commonSaga(),
    newsSaga(),
    scheduleSaga(),
    videoSaga(),
    podcastSaga(),
    appSaga(),
    authSaga(),
    adsSaga(),
    storageSaga(),
  ]);
}
