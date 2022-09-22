import {
  Action,
  ActionCreator,
  on,
  ReducerTypes,
} from "@ngrx/store";
import { counterActions } from "../../counter/store/counter.actions";

export interface CounterState {
  count: number;
}

function createReducersArray<S, A extends Action = Action>(
  initialState: S,
  ...ons: ReducerTypes<S, readonly ActionCreator[]>[]
) {
  return ons;
}

export const createCounterReducers = (initialState: CounterState, actions: typeof counterActions) => createReducersArray(
  initialState,
  on(actions.increment, (state) => ({
    ...state,
    count: state.count + 1,
  })),
  on(actions.incrementDouble, (state: CounterState, { addCount }) => ({
    ...state,
    count: state.count + addCount,
  })),
  on(actions.decrement, (state: CounterState) => ({
    ...state,
    count: state.count - 1,
  })),
  on(actions.reset, (state: CounterState) => ({ count: 0 }))
);
