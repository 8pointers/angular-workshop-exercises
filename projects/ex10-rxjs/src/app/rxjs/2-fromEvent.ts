import { fromEvent } from 'rxjs';

const run = () => {
  const click$ = fromEvent(document, 'click');

  const subscription = click$.subscribe({
    next: value => console.log('fromEvent', 'next', value),
    error: error => console.log('fromEvent', 'error', error),
    complete: () => console.log('fromEvent', 'complete')
  });

  setTimeout(() => subscription.unsubscribe(), 5000);
};
export default run;
