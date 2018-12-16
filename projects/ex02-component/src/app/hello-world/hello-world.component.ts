import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  template: '<div>Hello {{name}}!</div>',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent {
  name = 'World';
}
