import { Component, OnDestroy, OnInit } from '@angular/core';
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
export class DemoNgForTrackByComponent implements OnInit, OnDestroy {
  interval: any;
  length = 5;
  offset = 0;
  get people() {
    return Array.from({ length: this.length }, (_, i) => (this.offset + i) % this.length).map(id => ({ id, name: `Name ${id}` }));
  }
  ngOnInit() {
    this.interval = setInterval(() => this.offset++, 2000);
  }
  ngOnDestroy() {
    clearInterval(this.interval);
  }
  id = name => name.id;
}
