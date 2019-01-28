import { Component } from '@angular/core';

@Component({
  selector: 'app-click-counter',
  template: `
    <p>
      <button (click)="count()">Count</button> <br />
      Clicked: {{ times }}
    </p>
  `
})
export class ClickCounterComponent {
  times = 0;

  count = () => this.times++;
}
