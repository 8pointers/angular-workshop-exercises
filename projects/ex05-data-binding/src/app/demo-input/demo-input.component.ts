import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-demo-input-parent',
  template: `<button (click)="makeItHappier()">Make it happier!</button>
    <app-demo-input-child [name]="name" [name2]="name.substring(0, name.length / 2)"></app-demo-input-child>
    <app-demo-input-child [name]="name"></app-demo-input-child>
    <app-demo-input-child name="{{ name }}"></app-demo-input-child>
    <app-demo-input-child name="name"></app-demo-input-child> `
})
export class DemoInputParentComponent {
  name = 'World';
  makeItHappier = () => (this.name += '!');
}

@Component({ selector: 'app-demo-input-child', template: '<div>Hello {{ name }}!</div>' })
export class DemoInputChildComponent implements OnChanges {
  @Input()
  name: string;
  @Input()
  name2: string;
  ngOnChanges(changes) {
    console.log('DemoInputChildComponent', 'ngOnChanges', changes);
  }
}
