import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-ng-if',
  template: `
    <ng-template [ngIf]="hasWon" [ngIfElse]="hasLost">
      <div>Congratulations, you won!</div>
      <br />
    </ng-template>
    <ng-template #hasLost> <div>You lost.</div> </ng-template>

    <div *ngIf="hasWon; else comiserations">Congratulations :)</div>
    <ng-template ref-comiserations>Comiserations :(</ng-template>
  `
})
export class DemoNgIfComponent {
  hasWon = Math.random() < 0.5;
}
