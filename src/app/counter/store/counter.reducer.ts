import { ActionReducerMap, combineReducers, compose, createReducer } from "@ngrx/store";
import {
  CounterState,
  createCounterReducers,
} from "../../shared/store/create-counter-reducers";
import { actions } from "./counter.actions";

export const featureKey = "counter";

export interface State extends CounterState {}

export const initialState: State = {
  count: 0,
};

export interface CounterMetaState {
  myCounter: State;
  counter: CounterState;
}

export const reducer = createReducer(
  initialState,
  ...createCounterReducers(actions)
);

// export const metaCounterReducer: ActionReducerMap<CounterMetaState> = {
//   myCounter: createReducer(initialState),
//   counter: createCounterReducers(initialState, actions)
// };

// export const reducer = combineReducers(
//   metaCounterReducer,
//   // createCounterReducers(initialState, actions)
//   // createCounterReducers(initialState, actions)
// );

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
