import {createSelector} from 'reselect';
import * as Actions from './constants';

export const languageCommon = (state: any) => state.language;

// Select active language
export const languageSelector = createSelector(
  languageCommon,
  (data) => data?.language || Actions.DEFAULT_LANGUAGE_CODE,
);

// Select defaults language
export const defaultLanguageSelector = createSelector(
  languageCommon,
  (data) => data?.defaultLanguage || Actions.DEFAULT_LANGUAGE_CODE,
);

// Select list languages
export const listLanguageSelector = createSelector(
  languageCommon,
  (data) => data?.languages || {},
);
