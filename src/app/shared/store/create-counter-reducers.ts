import { ActionCreator } from '@ngrx/store';
import { on } from '@ngrx/store';
import { CounterState } from './counter-state.model';

export interface DynamicActions {
  [index: string]: ActionCreator<any>;
}

export function createCounterReducers(actions: DynamicActions) {
  return [
    on(actions.increment, (state: CounterState) => ({
      count: state.count + 1,
    })),
    on(actions.decrement, (state: CounterState) => ({
      count: state.count - 1,
    })),
    on(actions.reset, (state: CounterState) => ({ count: 0 })),
  ];
}