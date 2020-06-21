import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-keyup',
  template: `<input #txt (keyup)="onKeyUp($event)" /> {{ value }} {{ txt.value }}`
})
export class DemoKeyupComponent {
  value = '';

  onKeyUp = event => (this.value = event.target.value);
}
