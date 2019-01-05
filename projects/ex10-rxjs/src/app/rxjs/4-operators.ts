import { interval } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';

const run = () => {
  const counter$ = interval(1000).pipe(
    filter(i => i % 2 === 1),
    take(5),
    map(i => `${i} seconds`)
  );

  counter$.subscribe(
    value => console.log('rxjs/operators', 'next', value),
    error => console.log('rxjs/operators', 'error', error),
    () => console.log('rxjs/operators', 'complete')
  );
};
export default run;
