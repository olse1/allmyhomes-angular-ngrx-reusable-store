import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCounter from './second-counter.reducer';

export const getContactPreferencesState =
  createFeatureSelector<fromCounter.State>(fromCounter.featureKey);

export const selectCount = createSelector(
  getContactPreferencesState,
  (state: fromCounter.State) => state.count
);
