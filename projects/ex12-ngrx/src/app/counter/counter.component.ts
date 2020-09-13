import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Increment } from './counter.actions';

@Component({
  selector: 'app-counter',
  template: `<div><button (click)="increment()">Increment</button> {{ count$ | async }}</div>`
})
export class CounterComponent {
  count$: Observable<number>;
  increment = () => this.store.dispatch(new Increment());

  constructor(private store: Store<{ counter: number }>) {
    this.count$ = store.pipe(select('counter'));
  }
}
