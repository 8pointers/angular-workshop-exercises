import { Component } from '@angular/core';

@Component({
  selector: 'app-click-counter',
  template: `<button (click)="increment()">Count</button>{{ times }}`
})
export class ClickCounterComponent {
  private timesValue = 0;
  get times() {
    // this.timesValue++;
    console.log('get', this.timesValue);
    return this.timesValue;
  }
  set times(value) {
    console.log('set', value);
    this.timesValue = value;
  }
  increment() {
    console.log('increment');
    this.timesValue++;
  }
}
