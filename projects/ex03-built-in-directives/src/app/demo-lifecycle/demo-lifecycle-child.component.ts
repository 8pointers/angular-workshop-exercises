import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-lifecycle-child',
  template: 'Child: {{count}}'
})
export class DemoLifecycleChildComponent implements OnInit, OnDestroy {
  interval;
  count = 0;
  ngOnInit() {
    this.interval = setInterval(() => this.count++, 200);
  }
  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
