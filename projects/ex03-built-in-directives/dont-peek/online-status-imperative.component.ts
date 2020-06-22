import { Component, OnDestroy, OnInit } from '@angular/core';

const eventTypes = ['online', 'offline'];

@Component({
  selector: 'app-online-status',
  template: '<span style="font-size: xx-large">{{isOnline ? "😀" : "🤕"}}</span>'
})
export class OnlineStatusComponent implements OnInit, OnDestroy {
  isOnline = window.navigator.onLine;
  onChange = () => (this.isOnline = window.navigator.onLine);
  ngOnInit(): void {
    eventTypes.forEach(type => window.addEventListener(type, this.onChange));
  }
  ngOnDestroy(): void {
    eventTypes.forEach(type => window.removeEventListener(type, this.onChange));
  }
}
