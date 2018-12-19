import { interval, range } from 'rxjs';
import { filter, map, reduce, scan } from 'rxjs/operators';

const __: any = 'replace me so that the test is passing';

describe('Transforming observables', function() {
  it('should understand map', function() {
    const o$ = range(1, 5).pipe(map(x => 2 * x));
    const result = [];
    o$.subscribe(
      value => result.push(value),
      error => result.push(error),
      () => result.push('complete')
    );
    expect(result).toEqual(__);
  });
  it('should understand filter', function() {
    const o$ = range(1, 5).pipe(filter(x => x % 2 === 0));
    const result = [];
    o$.subscribe(
      value => result.push(value),
      error => result.push(error),
      () => result.push('complete')
    );
    expect(result).toEqual(__);
  });
  it('should understand reduce 1', function() {
    const o$ = range(1, 5).pipe(reduce((acc, x) => acc + x, 0));
    const result = [];
    o$.subscribe(
      value => result.push(value),
      error => result.push(error),
      () => result.push('complete')
    );
    expect(result).toEqual(__);
  });
  it('should understand reduce 2', function(done) {
    const o$ = interval(10).pipe(reduce((acc, x) => acc + x, 0));
    const result = [];
    o$.subscribe(
      value => result.push(value),
      error => result.push(error),
      () => result.push('complete')
    );
    setTimeout(() => {
      expect(result).toEqual(__);
      done();
    }, 100);
  });
  it('should understand scan 1', function() {
    const o$ = range(1, 5).pipe(scan((acc, x) => acc + x, 0));
    const result = [];
    o$.subscribe(
      value => result.push(value),
      error => result.push(error),
      () => result.push('complete')
    );
    expect(result).toEqual(__);
  });
  it('should understand scan 2', function(done) {
    const o$ = interval(10).pipe(scan((acc, x) => acc + x, 0));
    const result = [];
    o$.subscribe(
      value => result.push(value),
      error => result.push(error),
      () => result.push('complete')
    );
    setTimeout(() => {
      expect(result).toEqual(__);
      done();
    }, 100);
  });
});
