import {createSelector} from 'reselect';

export const rootState = (state: any) => state.feed;

export const feedsSelector = createSelector(rootState, (data) => data.feeds);
