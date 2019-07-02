import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-ng-class',
  template: `
    <div class="{{ (normalUser ? 'loggedIn' : '') + (normalUser?.vip ? ' vip' : '') }}">
      Motivation
    </div>
    <div [ngClass]="{ loggedIn: noUser, vip: noUser?.vip }">
      {{ noUser?.name || 'Plase login...' }}
    </div>
    <div [ngClass]="{ loggedIn: normalUser, vip: normalUser?.vip }">
      {{ normalUser?.name || 'Plase login...' }}
    </div>
    <div [ngClass]="{ loggedIn: vipUser, vip: vipUser?.vip }">
      {{ vipUser?.name || 'Plase login...' }}
    </div>
    <div [ngClass]="['loggedIn', 'vip']">With Array</div>
    <div [ngClass]="'loggedIn vip'">With String</div>
    <div ngClass="loggedIn vip">No binding</div>
  `,
  styleUrls: ['./demo-ng-class.component.css']
})
export class DemoNgClassComponent {
  noUser = null;
  normalUser = { name: 'Myamoto', vip: false };
  vipUser = { name: 'Hattori', vip: true };
}
