import { Component } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-intro-1',
  template: '<div>{{(message$ | async)}}</div>'
})
export class Intro1Component {
  message$ = from(['One', 'Two', 'Three']);
}
