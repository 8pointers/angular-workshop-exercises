import { Pipe, PipeTransform } from '@angular/core';
import { cellKey } from './game-of-life.reducer';

@Pipe({ name: 'cells' })
export class CellsPipe implements PipeTransform {
  transform(isAlive, n) {
    return Array.from({ length: n * n }, (_, index) => ({
      row: index % n,
      column: Math.floor(index / n)
    })).map(({ row, column }) => ({
      row,
      column,
      isAlive: isAlive[cellKey(row, column)]
    }));
  }
}
