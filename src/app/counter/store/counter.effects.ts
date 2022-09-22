import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import * as CounterActions from './counter.actions';
import { of } from 'rxjs';
import { concatMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CounterEffects {
  incrementEffect2$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CounterActions.actions.increment),
      concatMap(() => {
        console.log('hallo effect');
        return of(CounterActions.actions.incrementDouble({ addCount: 10 }));
      })
    );
  });

  constructor(private readonly actions$: Actions) {
    console.log('hallo');
    console.log(this.actions$);
  }
}
