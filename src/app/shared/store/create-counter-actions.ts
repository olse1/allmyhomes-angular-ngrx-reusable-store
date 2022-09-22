import { createAction, props } from '@ngrx/store';

export const createCounterActions = (identifier: string) => {
  return {
    increment: createAction(`[${identifier}] Increment`),
    incrementDouble: createAction(
      `[${identifier}] Increment Double`,
      props<{
        addCount: number;
      }>()
    ),
    decrement: createAction(`[${identifier}] Decrement`),
    reset: createAction(`[${identifier}] Reset`),
  };
};
