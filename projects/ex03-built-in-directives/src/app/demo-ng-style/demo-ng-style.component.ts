import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-ng-style',
  template: `
    <div [ngStyle]="{ color: 'blue', 'font-size': size + 'px' }">Hello World!</div>
  `
})
export class DemoNgStyleComponent implements OnInit, OnDestroy {
  size = 10;
  interval: any;
  ngOnInit() {
    this.interval = setInterval(() => (this.size = 10 + (Math.floor(Date.now() / 100) % 10)), 100);
  }
  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
