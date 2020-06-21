import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-ng-style',
  template: ` <div [ngStyle]="{ color: 'blue', 'font-size': size + 'px' }">Hello World!</div> `
})
export class DemoNgStyleComponent {
  size = 10 * (2 + Math.floor(3 * Math.random()));
}
