import { ActionsUnion, ActionTypes } from './game-of-life.actions';

export const cellKey = (row, column) => `${row}_${column}`;
// prettier-ignore
const deltas = Array.from({ length: 9 }, (_, i) => [Math.floor(i / 3) - 1, (i % 3) - 1, i === 4 ? 0 : 1]);

export function gameOfLifeReducer(state: any = {}, action: ActionsUnion) {
  if (action.type === ActionTypes.Toggle) {
    const key = cellKey(action.row, action.column);
    const { [key]: isAlive, ...others } = state;
    return isAlive ? others : { ...others, [key]: true };
  }
  if (action.type === ActionTypes.Tick) {
    const neighbours = Object.keys(state)
      .map(k => k.split('_').map(p => parseInt(p, 10)))
      .map(([row, col]) => deltas.map(([r, c, n]) => [row + r, col + c, n]))
      .reduce((acc, arr) => [...acc, ...arr], [])
      .map(([row, column, dn]) => [`${row}_${column}`, dn])
      .reduce((acc, [k, dn]) => ({ ...acc, [k]: (acc[k] || 0) + dn }), {});
    return Object.keys(neighbours)
      .filter(k => (state[k] && neighbours[k] === 2) || neighbours[k] === 3)
      .reduce((result, key) => ({ ...result, [key]: true }), {});
  }
  return state;
}
