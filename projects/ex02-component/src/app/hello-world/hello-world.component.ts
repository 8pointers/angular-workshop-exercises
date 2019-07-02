import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  template: '<div>Hello {{name}}!</div>'
})
export class HelloWorldComponent {
  name = 'World';
}
