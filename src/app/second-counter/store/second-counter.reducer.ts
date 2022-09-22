import { createReducer, on } from '@ngrx/store';
import { actions } from './second-counter.actions';

export const featureKey = 'second-counter';

export interface State {
  count: number;
}

export const initialState: State = {
  count: 0,
};

export const reducer = createReducer(
  initialState,
  on(actions.increment, (state) => ({ count: state.count + 1 })),
  on(actions.decrement, (state) => ({ count: state.count - 1 })),
  on(actions.reset, (state) => ({ count: 0 }))
);

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
