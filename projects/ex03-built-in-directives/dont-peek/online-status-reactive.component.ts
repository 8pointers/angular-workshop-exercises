import { Component } from '@angular/core';
import { fromEvent, merge } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-online-status',
  template: '{{(isOnline$ | async) ? "😀" : "🤕"}}'
})
export class OnlineStatusComponent {
  isOnline$ = merge(...['online', 'offline'].map(eventType => fromEvent(window, eventType))).pipe(map(() => window.navigator.onLine));
}
