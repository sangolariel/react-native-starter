import * as Actions from './constants';

export const initState = {
  defaultLanguage: Actions.DEFAULT_LANGUAGE_CODE,
  language: null,
  languages: [],
};

/**
 * Common reducer
 * @param state
 * @param action
 * @returns {*}
 */
function languageReducer(state = initState, action: any = {}) {
  const {type, payload} = action;
  switch (type) {
    case Actions.SET_LANGUAGE:
      return {
        ...state,
        language: payload.language,
        languages: payload.languages,
      };
    case Actions.CHANGE_LANGUAGE:
      return {
        ...state,
        language: payload,
      };
    default:
      return state;
  }
}

export default languageReducer;
