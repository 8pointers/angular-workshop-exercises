import { Observable } from 'rxjs';

const run = () => {
  const observable$ = Observable.create(observer => {
    [1, 2, 3].forEach(x => observer.next(x));
    observer.complete();
  });

  observable$.subscribe({
    next: value => console.log('rxjs/observable 1', 'next', value),
    error: error => console.log('rxjs/observable 1', 'error', error),
    complete: () => console.log('rxjs/observable 1', 'complete')
  });

  const subscription = observable$.subscribe(
    value => {
      console.log('rxjs/observable 2', 'next', value);
      if (value === 2) {
        subscription.unsubscribe();
      }
    },
    () => console.log('rxjs/observable 2', 'complete')
  );
};
export default run;
