import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-input-parent',
  template: `
    <button (click)="onClick()">Click me!</button>
    <app-demo-input-child [name]="name"></app-demo-input-child>
    <app-demo-input-child [name]="name"></app-demo-input-child>
    <app-demo-input-child name="{{ name }}"></app-demo-input-child>
    <app-demo-input-child name="name"></app-demo-input-child>
  `
})
export class DemoInputParentComponent {
  name = 'World';

  onClick = () => (this.name += '!');
}

@Component({
  selector: 'app-demo-input-child',
  template: '<div>Hello {{ name }}!</div>'
})
export class DemoInputChildComponent implements OnInit, OnChanges {
  @Input()
  name: string;

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngOnChanges(changes) {
    console.log('ngOnChanges', changes);
  }
}
