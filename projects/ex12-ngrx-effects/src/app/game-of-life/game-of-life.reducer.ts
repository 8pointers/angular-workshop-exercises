import { ActionsUnion, ActionTypes } from './game-of-life.actions';

export const cellKey = (row, column) => `${row}_${column}`;

const deltas = Array.from({ length: 9 }, (_, i) => [Math.floor(i / 3) - 1, (i % 3) - 1, i === 4 ? 0 : 1]);

export function gameOfLifeReducer(state: any = {}, action: ActionsUnion) {
  if (action.type === ActionTypes.Toggle) {
    const key = cellKey(action.row, action.column);
    const { [key]: isAlive, ...others } = state;
    return isAlive ? others : { ...others, [key]: [action.row, action.column] };
  }
  if (action.type === ActionTypes.Tick) {
    const neighbours = Object.values(state)
      .flatMap(([row, col]) => deltas.map(([r, c, n]) => [cellKey(row + r, col + c), row + r, col + c, n]))
      .reduce((acc, [key, row, col, n]) => ({ ...acc, [key]: { key, row, col, count: ((acc[key] && acc[key].count) || 0) + n } }), {});
    return Object.values(neighbours)
      .filter(({ key, count }) => (state[key] && count === 2) || count === 3)
      .reduce((result, { key, row, col }) => ({ ...result, [key]: [row, col] }), {});
  }
  return state;
}
