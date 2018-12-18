import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Another World';
  aBitLater = new Date(Date.now() + 10000);
  onGreeting(message) {
    this.name += message;
  }
}
