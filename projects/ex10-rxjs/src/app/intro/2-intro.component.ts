import { Component } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-intro-2',
  template: '<div>Timer: {{timer$ | async}}</div>'
})
export class Intro2Component {
  timer$ = timer(0, 1000);
}
