import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-counter1',
  template: '<div>{{counter}}</div>'
})
export class Counter1Component implements OnInit, OnDestroy {
  counter$ = interval(1000);
  subscription: Subscription;
  counter: number;

  ngOnInit(): void {
    this.subscription = this.counter$.subscribe(counter => (this.counter = counter));
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
