import { Component } from '@angular/core';

const makePeople = (length, startId) =>
  Array.from({ length })
    .map((_, i) => startId + i)
    .map(id => ({ id, name: `Name ${id}` }));

@Component({ selector: 'app-id', template: '{{id}}' })
export class IdComponent {
  private static count = 0;
  id = IdComponent.count++;
}

@Component({
  selector: 'app-demo-ng-for-track-by',
  template: `<div *ngFor="let p of ps"><app-id></app-id> - {{ p.name }}</div>
    <div *ngFor="let p of ps; trackBy: badId"><app-id></app-id> - {{ p.name }}</div>
    <div *ngFor="let p of ps; trackBy: id"><app-id></app-id> - {{ p.name }}</div>`
})
export class DemoNgForTrackByComponent {
  ps = makePeople(10, 0);
  drop = () => (this.ps = makePeople(this.ps.length - 1, 0));
  // drop = () => (this.ps = makePeople(this.ps.length - 1, 10 - this.ps.length));
  // drop = () => (this.ps = makePeople(this.ps.length, 0).sort(() => Math.random() - 0.5));
  constructor() {
    setInterval(this.drop, 2000); // Bad idea!!!
  }
  badId = index => index;
  id = (_, person) => person.id;
  trackBy = propertyName => (_, obj) => obj[propertyName];
}
