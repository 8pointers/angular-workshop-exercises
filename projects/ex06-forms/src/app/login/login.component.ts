import { Component } from '@angular/core';

class Login {
  constructor(public username: string, public password: string) {}
}

@Component({
  selector: 'app-login',
  styleUrls: ['./login.component.css'],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  model = new Login('', '');

  login() {
    alert(`Logging with ${this.model.username} ${this.model.password}`);
    this.model = new Login('', '');
  }
}
