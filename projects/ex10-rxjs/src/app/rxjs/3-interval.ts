import { interval } from 'rxjs';

const run = () => {
  const counter$ = interval(1000);

  const subscription = counter$.subscribe(
    value => console.log('counter', 'next', value),
    error => console.log('counter', 'error', error),
    () => console.log('counter', 'complete')
  );

  setTimeout(() => subscription.unsubscribe(), 5000);
};
export default run;
