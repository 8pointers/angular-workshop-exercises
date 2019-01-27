import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-demo-two-way-parent',
  template: `
    {{ counter }}
    <app-demo-two-way-child [value]="counter"></app-demo-two-way-child>
    <app-demo-two-way-child [(value)]="counter"></app-demo-two-way-child>
    <app-demo-two-way-child [(value)]="counter"></app-demo-two-way-child>
    <!--app-demo-two-way-child (valueChange)="counterChanged($event)"></app-demo-two-way-child>
    <app-demo-two-way-child [value]="counter" (valueChange)="counterChanged($event)"></app-demo-two-way-child>
    <app-demo-two-way-child [value]="counter" (valueChange)="counterChanged($event)"></app-demo-two-way-child-->
  `
})
export class DemoTwoWayParentComponent {
  counter = 0;
  // counterChanged = value => (this.counter = value);
}
@Component({
  selector: 'app-demo-two-way-child',
  template: '<button (click)="inc()">{{ value }}</button>'
})
export class DemoTwoWayChildComponent {
  @Input()
  value = 0;
  @Output()
  valueChange = new EventEmitter<number>();
  inc = () => this.valueChange.next(this.value + 1);
}
