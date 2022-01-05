// @flow
import * as Actions from './constants';

/**
 * Fetch Feed List
 * @returns {{type: string}}
 */
export function fetchFeeds() {
  return {
    type: Actions.FETCH_FEEDS,
  };
}

/**
 * Fetch Feed List Success
 * @returns {{type: string}}
 */
export function fetchFeedsSuccess() {
  return {
    type: Actions.FETCH_FEEDS_SUCCESS,
  };
}

/**
 * Fetch Feed List Fail
 * @returns {{type: string}}
 */
export function fetchFeedsFail() {
  return {
    type: Actions.FETCH_FEEDS_FAIL,
  };
}
