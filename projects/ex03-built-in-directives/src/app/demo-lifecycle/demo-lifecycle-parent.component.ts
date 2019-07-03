import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-lifecycle-parent',
  template: `
    Parent: {{ offset }}
    <app-demo-lifecycle-child *ngIf="offset % 2 === 0"></app-demo-lifecycle-child>
  `
})
export class DemoLifecycleParentComponent implements OnInit, OnDestroy {
  interval;
  offset = 0;
  ngOnInit() {
    this.interval = setInterval(() => this.offset++, 1000);
  }
  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
