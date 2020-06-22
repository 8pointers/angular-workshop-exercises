import { Component } from '@angular/core';
import { fromEvent, merge } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-online-status',
  template: '{{(isOnline$ | async) ? "😀" : "🤕"}}'
})
export class OnlineStatusComponent {
  isOnline$ = merge(...['online', 'offline'].map(eventType => fromEvent(window, eventType))).pipe(
    startWith(),
    map(() => window.navigator.onLine)
  );
}
