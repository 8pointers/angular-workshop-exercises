import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({ selector: 'app-demo-lc', template: 'Child: {{count}}' })
export class DemoLifecycleChildComponent implements OnInit, OnDestroy {
  interval: number;
  count = 0;
  ngOnInit() {
    this.interval = window.setInterval(() => this.count++, 200);
  }
  ngOnDestroy() {
    clearInterval(this.interval);
  }
}

@Component({
  selector: 'app-demo-lifecycle',
  template: `Parent: {{ offset }} <app-demo-lc *ngIf="offset % 2 === 0"></app-demo-lc>`
})
export class DemoLifecycleComponent implements OnInit, OnDestroy {
  interval: number;
  offset = 0;
  ngOnInit() {
    this.interval = window.setInterval(() => this.offset++, 1000);
  }
  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
