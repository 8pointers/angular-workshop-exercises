import { Component, Input } from '@angular/core';

const cellKey = (row, column) => `${row}_${column}`;
// prettier-ignore
const deltas = Array.from({ length: 9 }, (_, i) => [Math.floor(i / 3) - 1, (i % 3) - 1, i === 4 ? 0 : 1]);

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
      this.isAlive[key] = true;
    }
  }

  // prettier-ignore
  tick() {
    const neighbours = Object.keys(this.isAlive)
      .map(k => k.split('_').map(p => parseInt(p, 10)))
      .map(([row, col]) => deltas.map(([r, c, n]) => [row + r, col + c, n]))
      .reduce((acc, arr) => [...acc, ...arr], [])
      .map(([row, column, dn]) => [`${row}_${column}`, dn])
      .reduce((acc, [k, dn]) => ({ ...acc, [k]: (acc[k] || 0) + dn }), {});
    this.isAlive = Object.keys(neighbours)
      .filter(k => (this.isAlive[k] && neighbours[k] === 2) || neighbours[k] === 3)
      .reduce((result, key) => ({ ...result, [key]: true }), {});
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
