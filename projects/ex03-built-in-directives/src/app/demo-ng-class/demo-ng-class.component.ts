import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-ng-class',
  template: `
    <div [ngClass]="'user vip'">With String</div>
    <div [ngClass]="['user', loggedIn]">With Array</div>
    <div [ngClass]="{ user: true, vip: firstUser.isVIP }">
      {{ firstUser.name }}
    </div>
    <div [ngClass]="{ user: true, vip: secondUser.isVIP }">
      {{ secondUser.name }}
    </div>
  `,
  styleUrls: ['./demo-ng-class.component.css']
})
export class DemoNgClassComponent implements OnInit {
  firstUser: any;
  secondUser: any;
  loggedIn = 'loggedIn';
  ngOnInit() {
    this.firstUser = { name: 'Myamoto', isVIP: true };
    this.secondUser = { name: 'Hattori', isVIP: false };
  }
}
