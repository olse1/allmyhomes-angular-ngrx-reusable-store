import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as Actions from './counter.actions';

@Injectable()
export class CounterEffects {
  constructor(private readonly actions$: Actions) {

  }

  

}
