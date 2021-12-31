import * as Actions from './constants';

/**
 * Set language
 * @param code
 * @returns {{type: string, payload: string}}
 */
export function setLanguage(code: string) {
  return {
    type: Actions.SET_LANGUAGE,
    payload: code,
  };
}

/**
 * Change language
 * @param code
 * @returns {{type: string, payload: string}}
 */
export function changeLanguage(code: string) {
  return {
    type: Actions.CHANGE_LANGUAGE,
    payload: code,
  };
}
