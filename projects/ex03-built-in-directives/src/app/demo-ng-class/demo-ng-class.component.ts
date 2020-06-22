import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-ng-class',
  template: `<div [ngClass]="{ error: error, loggedIn: user, vip: user?.vip }">
      {{ user?.name || 'Plase login...' }}
    </div>
    <div [ngClass]="['loggedIn', 'vip', dynamic]">With Array</div>
    <div [ngClass]="'loggedIn vip'">With String</div>
    <div ngClass="loggedIn vip dynamic">No binding</div>`,
  styleUrls: ['./demo-ng-class.component.css']
})
export class DemoNgClassComponent {
  error = 'Unexpected error occurred.';
  user = { name: 'Myamoto', vip: true };
  // error = '';
  // user = { name: 'Myamoto', vip: true };
  // error = '';
  // user = { name: 'Myamoto' };
  // error = '';
  // user = undefined;
  dynamic = 'error';
  constructor() {
    setInterval(() => (this.dynamic = this.dynamic ? '' : 'error'), 500); // Bad idea!!!
  }
}
