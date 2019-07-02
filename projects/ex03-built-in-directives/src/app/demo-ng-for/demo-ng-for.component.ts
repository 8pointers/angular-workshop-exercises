import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-ng-for',
  template: `
    <ng-template ngFor let-friend [ngForOf]="friends" let-i="index">
      <div>{{ i }} {{ friend }}</div>
    </ng-template>

    <div *ngFor="let friend of friends; let i = index">{{ i }} {{ friend }}</div>
  `
})
export class DemoNgForComponent {
  friends: ['Hattori', 'Myamoto', 'Dave'];
}
