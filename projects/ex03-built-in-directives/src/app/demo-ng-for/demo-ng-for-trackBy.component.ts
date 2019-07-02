import { Component } from '@angular/core';
@Component({
  selector: 'app-demo-ng-for-track-by',
  template: `
    Without trackBy:
    <div *ngFor="let person of people">
      Person <span>{{ person.name }}</span>
    </div>
    With trackBy:
    <div *ngFor="let person of people; trackBy: id">
      Person <span>{{ person.name }}</span>
    </div>
  `
})
export class DemoNgForTrackByComponent {
  length = 5;
  offset = 0;
  constructor() {
    setInterval(() => this.offset++, 2000); // Bad idea!!!
  }
  get people() {
    return Array.from({ length: this.length }, (_, i) => (this.offset + i) % this.length).map(id => ({ id, name: `Name ${id}` }));
  }
  id = name => name.id;
}
