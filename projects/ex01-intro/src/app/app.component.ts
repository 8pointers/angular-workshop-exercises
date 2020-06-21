import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<h2>Hello {{ name }}!</h2>',
})
export class AppComponent {
  name = 'World';
}
