import { from, fromEvent, interval, Observable, range } from 'rxjs';
import { ajax } from 'rxjs/ajax';

const __: any = 'replace me so that the test is passing';

describe('Creating observables', function() {
  it('should understand Observable.create', function() {
    const o$ = Observable.create(function(subscriber) {
      subscriber.next('First');
      subscriber.next('Second');
      subscriber.next('Third');
      subscriber.next('Fourth');
      subscriber.complete();
    });
    const result = [];
    o$.subscribe(value => result.push(value), error => result.push(error), () => result.push('complete'));
    expect(result).toEqual(__);
  });
  it('should understand from', function() {
    const o$ = from([1, 2, 3, 4, 5]);
    const result = [];
    o$.subscribe(value => result.push(value), error => result.push(error), () => result.push('complete'));
    expect(result).toEqual(__);
  });
  it('should understand range', function() {
    const o$ = range(1, 10);
    const result = [];
    o$.subscribe(value => result.push(value), error => result.push(error), () => result.push('complete'));
    expect(result).toEqual(__);
  });
  it('should understand fromEvent', function() {
    const anElement = document.createElement('div');
    const result = [];
    const o$ = fromEvent(anElement, 'click');
    o$.subscribe(value => result.push(value), error => result.push(error), () => result.push('complete'));
    anElement.click();
    expect(result.length).toBe(__);
    expect(result[0].type).toBe(__);
  });
  it('should understand interval', function(done) {
    const o$ = interval(100);
    const result = [];
    const subscription = o$.subscribe(value => result.push(value), error => result.push(error), () => result.push('complete'));
    setTimeout(() => {
      subscription.unsubscribe();
      expect(result).toEqual(__);
      done();
    }, 500);
  });
  it('should understand ajax', function(done) {
    const o$ = ajax.getJSON('assets/player/1.json');
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
