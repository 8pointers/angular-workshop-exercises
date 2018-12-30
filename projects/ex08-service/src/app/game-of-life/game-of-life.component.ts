import { Component, Input } from '@angular/core';

const cellKey = (row, column) => `${row}_${column}`;

const deltas = Array.from({ length: 9 }, (_, i) => [Math.floor(i / 3) - 1, (i % 3) - 1, i === 4 ? 0 : 1]);

@Component({
  selector: 'app-game-of-life',
  styleUrls: ['./game-of-life.component.css'],
  template: `
    <div>
      <div class="grid" [ngStyle]="{ width: n * width + 'px', height: n * height + 'px' }">
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
  isAlive = {};

  isCellAlive(row, column) {
    return this.isAlive[cellKey(row, column)] || false;
  }

  toggleCellState(row, column) {
    const key = cellKey(row, column);
    if (this.isAlive[key]) {
      delete this.isAlive[key];
    } else {
      this.isAlive[key] = [row, column];
    }
  }

  // prettier-ignore
  tick() {
    const neighbours = Object.values(this.isAlive)
      .flatMap(([row, col]) => deltas.map(([r, c, n]) => [cellKey(row + r, col + c), row + r, col + c, n]))
      .reduce((acc, [key, row, col, n]) => ({ ...acc, [key]: { key, row, col, count: ((acc[key] && acc[key].count) || 0) + n } }), {});
    this.isAlive = Object.values(neighbours)
      .filter(({ key, count }) => (this.isAlive[key] && count === 2) || count === 3)
      .reduce((result, { key, row, col }) => ({ ...result, [key]: [row, col] }), {});
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
