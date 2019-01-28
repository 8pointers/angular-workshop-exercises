import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-keyup',
  template: `
    <input (keyup)="onKeyUp($event)" /> {{ value }}
  `
})
export class DemoKeyupComponent {
  value = '';

  onKeyUp = event => (this.value = event.target.value);
}
