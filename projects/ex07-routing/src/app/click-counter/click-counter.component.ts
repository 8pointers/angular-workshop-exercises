import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-counter',
  templateUrl: './click-counter.component.html'
})
export class ClickCounterComponent implements OnInit {
  times: number;

  count(): void {
    this.times++;
  }

  ngOnInit() {
    this.times = 0;
  }
}
