import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Decrement, Increment } from './counter.actions';

@Component({
  selector: 'app-counter',
  template: `
    <div>
      <button (click)="increment()">Increment</button> <br />
      <button (click)="decrement()">Decrement</button> <br />
      {{ count$ | async }}
    </div>
  `
})
export class CounterComponent {
  count$: Observable<number>;

  increment = () => this.store.dispatch(new Increment());

  decrement = () => this.store.dispatch(new Decrement());

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select('counter'));
  }
}
