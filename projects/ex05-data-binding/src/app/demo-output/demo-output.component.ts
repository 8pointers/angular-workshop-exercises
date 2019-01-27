import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-demo-output-parent',
  template: '{{dice}}<app-demo-output-child (roll)="onRoll($event)"></app-demo-output-child>'
})
export class DemoOutputParentComponent {
  dice = 0;

  onRoll = dice => (this.dice = dice);
}

@Component({
  selector: 'app-demo-output-child',
  template: '<button (click)="onClick()">Roll</button>'
})
export class DemoOutputChildComponent {
  @Output()
  roll = new EventEmitter();

  onClick = () => this.roll.next(1 + Math.floor(6 * Math.random()));
}
