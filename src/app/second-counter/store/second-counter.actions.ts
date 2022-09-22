import { createAction } from '@ngrx/store';
import { createCounterActions } from '../../shared/store/create-counter-actions';

export const actions = createCounterActions('Second Counter Component');

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
