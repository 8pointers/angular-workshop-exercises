import { Component } from '@angular/core';
@Component({
  selector: 'app-demo-interpolation',
  template: `
    <button (click)="dummy()">New event loop turn</button>
    <div>Hello {{ name }}!</div>
    <div>{{ 'Hello ' + name + '!' }}</div>
    <div>Hello {{ getName() }}!</div>
    <div>You rolled {{ dice }}</div>
  `
})
export class DemoInterpolationComponent {
  name = 'World';
  dummy() {}
  getName() {
    // console.log('getName');
    return this.name;
  }
  get dice() {
    // console.log('dice');
    return 1 + Math.floor(6 * Math.random());
  }
}
