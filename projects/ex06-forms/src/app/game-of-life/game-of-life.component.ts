import { Component, Input } from '@angular/core';

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

  tick() {
    const numberOfNeighbours = {};
    let parts, row, column, neighbourKey;
    for (const key in this.isAlive) {
      if (this.isAlive.hasOwnProperty(key)) {
        parts = key.split('_');
        row = parseInt(parts[0], 10);
        column = parseInt(parts[1], 10);
        numberOfNeighbours[key] = numberOfNeighbours[key] || 0;
        [
          [-1, -1],
          [-1, 0],
          [-1, 1],
          [0, -1],
          [0, 1],
          [1, -1],
          [1, 0],
          [1, 1]
        ].forEach(offset => {
          neighbourKey = cellKey(row + offset[0], column + offset[1]);
          numberOfNeighbours[neighbourKey] =
            (numberOfNeighbours[neighbourKey] || 0) + 1;
        });
      }
    }
    for (const key in numberOfNeighbours) {
      if (numberOfNeighbours.hasOwnProperty(key)) {
        const shouldDie =
          this.isAlive[key] &&
          (numberOfNeighbours[key] < 2 || numberOfNeighbours[key] > 3);
        const shouldResurrect =
          !this.isAlive[key] && numberOfNeighbours[key] === 3;
        if (shouldDie || shouldResurrect) {
          parts = key.split('_');
          row = parseInt(parts[0], 10);
          column = parseInt(parts[1], 10);
          this.toggleCellState(row, column);
        }
      }
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
