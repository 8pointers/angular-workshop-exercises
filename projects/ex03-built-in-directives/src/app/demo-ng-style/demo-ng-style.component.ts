import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-ng-style',
  template: `
    <div [ngStyle]="{ color: 'blue', 'font-size': size + 'px' }">Hello World!</div>
  `
})
export class DemoNgStyleComponent implements OnInit, OnDestroy {
  size = 10;
  interval: number;
  ngOnInit() {
    this.interval = window.setInterval(() => (this.size = 10 + (Math.floor(Date.now() / 1000) % 10)), 1000);
  }
  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
