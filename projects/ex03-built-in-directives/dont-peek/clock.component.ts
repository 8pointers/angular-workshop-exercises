import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  template: '{{ time }}'
})
export class ClockComponent implements OnInit, OnDestroy {
  time = this.getTime();
  interval;
  getTime() {
    return new Date().toLocaleTimeString();
  }
  ngOnInit(): void {
    this.interval = setInterval(() => (this.time = this.getTime()), 1000);
  }
  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
