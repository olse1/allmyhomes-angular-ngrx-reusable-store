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

const initialState: CounterState = {
  count: 0,
};

function createReducersPartial<S, A extends Action = Action>(
  initialState: S,
  ...ons: ReducerTypes<S, readonly ActionCreator[]>[]
) {
  return [...ons];
}

export const createCounterReducers = (actions: typeof counterActions) => createReducersPartial(
  initialState,
  on(actions.increment, (state: CounterState) => ({
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
