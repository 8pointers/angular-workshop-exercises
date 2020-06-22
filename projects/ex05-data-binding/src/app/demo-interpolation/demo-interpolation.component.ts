import { Component } from '@angular/core';
@Component({
  selector: 'app-demo-interpolation',
  template: `
    <button (click)="(0)">New event loop turn</button>
    <div>Hello {{ name }}!</div>
    <div>{{ 'Hello ' + name + '!' }}</div>
    <div>Hello {{ getName() }}!</div>
    <!-- <div>You rolled {{ dice }}</div> -->
  `
})
export class DemoInterpolationComponent {
  name = 'World';
  getName() {
    console.log('DemoInterpolationComponent', 'getName');
    return this.name;
  }
  get dice() {
    console.log('DemoInterpolationComponent', 'dice');
    return 1 + Math.floor(6 * Math.random());
  }
}
