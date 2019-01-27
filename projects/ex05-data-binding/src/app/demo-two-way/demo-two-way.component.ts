import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-demo-two-way',
  template: `
    {{ counter }}

    <app-demo-two-way-counter (valueChange)="counterChanged($event)"></app-demo-two-way-counter>

    <app-demo-two-way-counter [value]="counter"></app-demo-two-way-counter>

    <app-demo-two-way-counter [value]="counter" (valueChange)="counterChanged($event)"></app-demo-two-way-counter>
    <app-demo-two-way-counter [value]="counter" (valueChange)="counterChanged($event)"></app-demo-two-way-counter>

    <app-demo-two-way-counter [(value)]="counter"></app-demo-two-way-counter>
    <app-demo-two-way-counter [(value)]="counter"></app-demo-two-way-counter>
  `
})
export class DemoTwoWayComponent {
  counter = 0;
  counterChanged = value => (this.counter = value);
}

@Component({
  selector: 'app-demo-two-way-counter',
  template: '<button (click)="inc()">{{ value }}</button>'
})
export class DemoTwoWayCounterComponent {
  @Input()
  value = 0;
  @Output()
  valueChange = new EventEmitter<number>();

  inc = () => this.valueChange.next(this.value + 1);
}
