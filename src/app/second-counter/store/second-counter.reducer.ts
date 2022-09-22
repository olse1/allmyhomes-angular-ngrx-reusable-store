import { createReducer } from '@ngrx/store';
import { actions } from './second-counter.actions';
import { CounterState, createCounterReducers } from '../../shared/store/create-counter-reducers';

export const featureKey = 'second-counter';

export interface State extends CounterState {}

export const initialState: State = {
  count: 0,
};

export const reducer = createReducer(
  initialState,
  ...createCounterReducers(actions)
);

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
