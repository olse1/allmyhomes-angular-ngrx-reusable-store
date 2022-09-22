import { EntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { CounterState } from '../../shared/store/counter-state.model';
import { createCounterReducers } from '../../shared/store/create-counter-reducers';
import { actions } from './counter.actions';

export const featureKey = 'counter';

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
