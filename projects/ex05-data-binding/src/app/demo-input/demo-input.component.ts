import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-input',
  template: `
    <div>Hello {{ name }}!</div>
  `
})
export class DemoInputComponent implements OnInit {
  @Input()
  name: string;

  ngOnInit() {}
}
