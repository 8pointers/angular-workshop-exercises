import { Component } from '@angular/core';

@Component({
  selector: 'app-game-of-life',
  styleUrls: ['./game-of-life.component.css'],
  template: `
    <div>
      <div [ngStyle]="{ width: n * width + 'px', height: n * height + 'px' }">
        <div
          *ngFor="let cell of getCells()"
          class="cell"
          [ngClass]="{ alive: cell.isAlive }"
          [ngStyle]="{
            top: height * cell.row + 'px',
            left: height * cell.column + 'px',
            width: width + 'px',
            height: height + 'px'
          }"
        ></div>
      </div>
      <button class="tick">Next</button>
    </div>
  `
})
export class GameOfLifeComponent {
  public n = 10;
  public width = 20;
  public height = 20;

  public getCells() {
    return Array.from({ length: this.n * this.n }, (value, index) => {
      const row = Math.floor(index / this.n);
      const column = index % this.n;
      return { row, column, isAlive: (row + column) % 2 };
    });
  }
}
