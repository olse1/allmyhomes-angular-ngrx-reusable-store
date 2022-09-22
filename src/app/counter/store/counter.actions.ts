import { createAction } from '@ngrx/store';
import { createCounterActions } from '../../shared/store/create-counter-actions';

export const counterActions = createCounterActions('Counter Component');

export const reset = createAction(`['Counter Component'] Reset`);

export const actions = {
  ...counterActions,
};

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
