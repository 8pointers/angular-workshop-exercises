import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-keyup',
  template: `
    <input #txt1 (keyup)="sync($event.target.value)" /> {{ value }} {{ txt1.value }}
    <br />
    <input ref-txt2 /> {{ txt2.value }}
    <br />
    <input ref-txt3 (keyup)="(0)" /> {{ txt3.value }}
  `
})
export class DemoKeyupComponent {
  value = '';
  sync = v => (this.value = v);
}
