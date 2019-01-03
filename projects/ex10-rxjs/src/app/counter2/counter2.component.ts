import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-counter2',
  template: '<div>{{counter$ | async}}</div>'
})
export class Counter2Component {
  counter$ = interval(1000);
}
