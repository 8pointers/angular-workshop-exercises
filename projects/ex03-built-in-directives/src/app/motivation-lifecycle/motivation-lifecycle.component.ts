import { Component } from '@angular/core';

@Component({
  selector: 'app-motivation-lifecycle',
  template: '<span style="font-size: xx-large">{{isOnline ? "😀" : "🤕"}}</span>'
})
export class MotivationLifecycleComponent {
  isOnline = window.navigator.onLine;
  constructor() {
    const listener = () => (this.isOnline = window.navigator.onLine);
    window.addEventListener('online', listener);
    window.addEventListener('offline', listener);
  }
}
