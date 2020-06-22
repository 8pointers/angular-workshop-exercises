import { Component } from '@angular/core';

@Component({
  selector: 'app-motivation-ng-class',
  template: `<div class="{{ (error ? 'error ' : '') + (user ? 'loggedIn ' : '') + (user?.isVip ? 'vip ' : '') }}">
    Hello
    {{ user?.name }}
  </div>`,
  styleUrls: ['./motivation-ng-class.component.css']
})
export class MotivationNgClassComponent {
  error = 'Unexpected error occurred.';
  user = { name: 'Myamoto', isVip: true };
  classnames = obj => 'TODO';
}
