import { Component, Input } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Tick, Toggle } from './game-of-life.actions';

@Component({
  selector: 'app-game-of-life',
  styleUrls: ['./game-of-life.component.css'],
  template: `
    <div>
      <div class="grid" [ngStyle]="{ width: n * width + 'px', height: n * height + 'px' }">
        <div
          *ngFor="let cell of (isAlive$ | async | cells: n)"
          [ngClass]="{ cell: true, alive: cell.isAlive }"
          [ngStyle]="{
            top: height * cell.row + 'px',
            left: width * cell.column + 'px',
            width: width + 'px',
            height: height + 'px'
          }"
          (click)="toggle(cell.row, cell.column)"
        ></div>
      </div>
      <button class="tick" (click)="tick()">Next</button>
    </div>
  `
})
export class GameOfLifeComponent {
  @Input()
  n: number;
  @Input()
  width: number;
  @Input()
  height: number;
  isAlive$: Observable<any>;

  constructor(private store: Store<any>) {
    this.isAlive$ = store.pipe(select('gameOfLife'));
  }

  toggle = (row, column) => this.store.dispatch(new Toggle(row, column));

  tick = () => this.store.dispatch(new Tick());
}
