import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, of } from "rxjs";

// export const createCounterEffects = (actions$: Actions, counterActions: DynamicActions) => ([
//     incrementEffect$: createEffect(() => {
//         return actions$.pipe(
//           ofType(counterActions.increment),
//           concatMap(() => {
//             console.log('hallo effect');
//             return of(counterActions.incrementDouble({ addCount: 10 }));
//           })
//         );
//       })
// ])