import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-ng-style',
  template: `<div [ngStyle]="{ color: 'blue', 'font-size': size + 'px' }">Hello World!</div>
    <!-- <div ngStyle="color: blue; font-size: 10px">Does not work</div>  --> `
})
export class DemoNgStyleComponent {
  size = 10 * (2 + Math.floor(5 * Math.random()));
}
