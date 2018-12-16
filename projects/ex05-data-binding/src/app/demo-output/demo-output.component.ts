import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-demo-output',
  template: `
    <button (click)="greet('World')">Say Hello</button>
  `
})
export class DemoOutputComponent implements OnInit {
  @Output()
  greetingRequested = new EventEmitter();

  greet(name) {
    this.greetingRequested.next(name);
  }

  ngOnInit() {}
}
