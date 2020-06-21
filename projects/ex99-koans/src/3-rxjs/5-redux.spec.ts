import { from, merge } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { filter, flatMap, map, scan } from 'rxjs/operators';

const __: any = 'replace me so that the test is passing';

describe('Redux', function () {
  it('should understand redux', function () {
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

    state$.subscribe(
      value => result.push(value),
      error => result.push(error),
      () => result.push('complete')
    );

    expect(result).toEqual(__);
  });

  it('should understand redux effects', function (done) {
    const action$ = from([{ type: 'FETCH_PLAYER', playerId: 1 }]);
    const reducer = (state = {}, action) => {
      if (action.type === 'FETCH_PLAYER') {
        return { loading: true };
      }
      if (action.type === 'PLAYER_RECEIVED') {
        return { player: action.player };
      }
      return state;
    };
    const ofType = t => filter(({ type }) => type === t);
    const fetchPlayer$ = action$.pipe(
      ofType('FETCH_PLAYER'),
      flatMap(({ playerId }: any) => ajax.getJSON(`assets/player/${playerId}.json`)),
      map(player => ({ type: 'PLAYER_RECEIVED', player }))
    );
    const state$ = merge(action$, fetchPlayer$).pipe(scan(reducer, undefined));
    const result = [];

    state$.subscribe(
      value => result.push(value),
      error => result.push(error),
      () => {
        result.push('complete');
        expect(result).toEqual(__);
        done();
      }
    );
  });
});
