import { createAction } from '@ngrx/store';

export function createCounterActions(identifier: string) {
  return {
    increment: createAction(`[${identifier}] Increment`),
    incrementDouble: createAction(`[${identifier}] Increment Double`),
    decrement: createAction(`[${identifier}] Decrement`),
    reset: createAction(`[${identifier}] Reset`),
  };
}
