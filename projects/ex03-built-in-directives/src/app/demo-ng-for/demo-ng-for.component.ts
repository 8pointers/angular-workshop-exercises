import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-ng-for',
  template: `
    <div *ngFor="let friend of friends">{{ friend }}</div>
  `
})
export class DemoNgForComponent implements OnInit {
  friends: any[];

  ngOnInit() {
    this.friends = ['Hattori', 'Myamoto', 'Dave'];
  }
}
