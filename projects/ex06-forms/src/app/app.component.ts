import { Component } from '@angular/core';
import { timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  n$ = timer(0, 1000).pipe(map(i => 20 + Math.abs(5 - (i % 10))));
  name = 'World';
}
