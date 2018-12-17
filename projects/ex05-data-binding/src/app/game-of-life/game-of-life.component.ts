import { Component } from '@angular/core';

const cellKey = (row, column) => `${row}_${column}`;

@Component({
  selector: 'app-game-of-life',
  styleUrls: ['./game-of-life.component.css'],
  template: `
    <div>
      <div
        class="grid"
        [ngStyle]="{ width: n * width + 'px', height: n * height + 'px' }"
      >
        <div
          *ngFor="let cell of cells"
          [ngClass]="{ cell: true, alive: cell.isAlive }"
          [ngStyle]="{
            top: height * cell.row + 'px',
            left: width * cell.column + 'px',
            width: width + 'px',
            height: height + 'px'
          }"
          (click)="toggleCellState(cell.row, cell.column)"
        ></div>
      </div>
      <button class="tick">Next</button>
    </div>
  `
})
export class GameOfLifeComponent {
  n = 10;
  width = 20;
  height = 20;
  isAlive = {};

  isCellAlive(row, column) {
    return this.isAlive[cellKey(row, column)] || false;
  }

  toggleCellState(row, column) {
    const key = cellKey(row, column);
    if (this.isAlive[key]) {
      delete this.isAlive[key];
    } else {
      this.isAlive[key] = true;
    }
  }

  get cells() {
    return Array.from({ length: this.n * this.n }, (_, index) => ({
      row: Math.floor(index / this.n),
      column: index % this.n
    })).map(({ row, column }) => ({
      row,
      column,
      isAlive: this.isCellAlive(row, column)
    }));
  }
}
