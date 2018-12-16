import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-ng-if',
  template: `
    <div *ngIf="hasWon; else: comiserations">Congratulations :)</div>
    <ng-template #comiserations>Comiserations :(</ng-template>
  `
})
export class DemoNgIfComponent implements OnInit {
  hasWon = Math.random() < 0.5;

  ngOnInit() {}
}
