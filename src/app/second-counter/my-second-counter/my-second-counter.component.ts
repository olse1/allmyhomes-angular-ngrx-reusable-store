import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { actions } from '../store/second-counter.actions';
import { State } from '../store/second-counter.reducer';
import { selectCount } from '../store/second-counter.selectors';

@Component({
  selector: 'app-my-second-counter',
  templateUrl: './my-second-counter.component.html',
  styleUrls: ['./my-second-counter.component.css'],
})
export class MySecondCounterComponent {
  count$: Observable<number>;

  constructor(private store: Store<State>) {
    this.count$ = store.select(selectCount);
  }

  increment() {
    this.store.dispatch(actions.increment());
  }

  decrement() {
    this.store.dispatch(actions.decrement());
  }

  reset() {
    this.store.dispatch(actions.reset());
  }
}
