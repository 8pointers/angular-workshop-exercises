import { Component } from '@angular/core';

@Component({
  selector: 'app-game-of-life',
  styleUrls: ['./game-of-life.component.css'],
  template: `<div>
    <div class="grid" [ngStyle]="{ width: n * width + 'px', height: n * height + 'px' }">
      <div
        *ngFor="let cell of cells; trackBy: cellId"
        [ngClass]="{ cell: true, alive: cell.isAlive }"
        [ngStyle]="{
          top: height * cell.row + 'px',
          left: height * cell.column + 'px',
          width: width + 'px',
          height: height + 'px'
        }"
      ></div>
    </div>
    <button class="tick">Tick</button>
  </div>`
})
export class GameOfLifeComponent {
  n = 10;
  width = 20;
  height = 20;
  cells = Array.from({ length: this.n * this.n }, (_, index) => ({
    row: Math.floor(index / this.n),
    column: index % this.n
  })).map(({ row, column }) => ({
    row,
    column,
    isAlive: (row + column) % 2
  }));
  cellId = i => i;
}
