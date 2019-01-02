import { forkJoin, from, merge } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { filter, scan } from 'rxjs/operators';

const __: any = 'replace me so that the test is passing';

describe('Higher-order observables observables', function() {
  it('should understand flatMap', function() {
    const action$ = from([{ type: 'INCREMENT' }, { type: 'INCREMENT' }, { type: 'DECREMENT' }]);
    const reducer = (state = 0, action) => {
      if (action.type === 'INCREMENT') {
        return state + 1;
      }
      if (action.type === 'DECREMENT') {
        return state - 1;
      }
      return state;
    };
    const state$ = action$.pipe(scan(reducer, undefined));
    const result = [];

    state$.subscribe(value => result.push(value), error => result.push(error), () => result.push('complete'));

    expect(result).toEqual(__);
  });

  it('', function() {
    const action$ = from([{ type: 'FETCH_PLAYER', playerId: 1 }]);
    const reducer = (state = {}, action) => {
      if (action === 'FETCH_PLAYER') {
        return { loading: true };
      }
      if (action === 'PLAYER_RECEIVED') {
        return { player: action.player };
      }
      return state;
    };
    const ofType = t => filter(({ type }) => type === t);
    const fetchPlayer$ = action$.pipe(
      ofType('FETCH_PLAYER'),
      forkJoin(({ playerId }) => ajax.getJSON(''))
    );
    const state$ = merge(action$, fetchPlayer$).pipe(scan(reducer, undefined));
    const result = [];

    state$.subscribe(value => result.push(value), error => result.push(error), () => result.push('complete'));

    expect(result).toEqual(__);
  });
});
