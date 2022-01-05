import * as Actions from './constants';

export const initState = {
  loaded: false,
  feeds: [],
};

/**
 * Common reducer
 * @param state
 * @param action
 * @returns {*}
 */
function feedReducer(state = initState, action: any = {}) {
  const {type} = action;
  switch (type) {
    case Actions.FETCH_FEEDS_SUCCESS:
      return {
        ...state,
        feeds: action.payload,
      };
    case Actions.FETCH_FEEDS_FAIL:
      return {
        ...state,
        feeds: initState.feeds,
      };
    default:
      return state;
  }
}
export default feedReducer;
