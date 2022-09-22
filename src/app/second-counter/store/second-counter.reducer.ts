import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './second-counter.actions';

export const featureKey = 'second-counter';

export const initialState = 0;

export const reducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
