import { Component } from '@angular/core';
@Component({
  selector: 'app-demo-interpolation-context',
  template: `
    <input type="text" (keyup)="(0)" #newItem /> {{ newItem.value }}
    <ul>
      <li *ngFor="let item of items">{{ item }}</li>
    </ul>
  `
})
export class DemoInterpolationContextComponent {
  items = ['First', 'Second', 'Third'];
  newItem = { value: 'Ignored' };
  item = 'Ignored';
}
