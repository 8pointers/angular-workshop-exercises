import { forkJoin, from } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { flatMap, map, pluck, reduce } from 'rxjs/operators';

const __: any = 'replace me so that the test is passing';

describe('Higher-order observables observables', function() {
  it('should understand flatMap', function(done) {
    const o$ = from([1, 3, 4, 5, 7]).pipe(
      flatMap(playerId => ajax.getJSON(`assets/player/${playerId}.json`)),
      pluck('name'),
      reduce((acc, player) => [...acc, player], [])
    );
    const result = [];
    o$.subscribe(
      value => result.push(value),
      error => result.push(error),
      () => {
        result.push('complete');
        expect(result).toEqual(__);
        done();
      }
    );
  });

  it('should understand forkJoin', function(done) {
    const o$ = forkJoin(
      [1, 3, 4, 5, 7].map(playerId =>
        ajax
          .getJSON(`assets/player/${playerId}.json`)
          .pipe(map((player: any) => player.name))
      )
    );
    const result = [];
    o$.subscribe(
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
