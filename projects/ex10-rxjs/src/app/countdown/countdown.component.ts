import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { map, startWith, take } from 'rxjs/operators';

const n = 10;

@Component({
  selector: 'app-countdown',
  template: '<div>{{counter$ | async}}</div>'
})
export class CountdownComponent {
  counter$ = interval(1000).pipe(
    take(n),
    map(i => i + 1),
    startWith(0),
    map(i => n - i || 'Time is up!')
  );
}
