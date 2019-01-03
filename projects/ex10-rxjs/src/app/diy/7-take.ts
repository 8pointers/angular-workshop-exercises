const run = () => {
  const interval = timeInMillis => subscriber => {
    let counter = 0;
    const myInterval = setInterval(() => subscriber.next(counter++), timeInMillis);
    return () => clearInterval(myInterval);
  };

  const take = n => observable => subscriber => {
    const unsubscribe = observable({
      next: x => {
        subscriber.next(x);
        if (!--n) {
          unsubscribe();
          subscriber.complete();
        }
      },
      error: e => subscriber.error(e),
      complete: () => subscriber.complete()
    });
    return unsubscribe;
  };

  const counter$ = take(3)(interval(1000));
  counter$({
    next: value => console.log('take', 'next', value),
    error: error => console.log('take', 'error', error),
    complete: () => console.log('take', 'complete')
  });
};
export default run;
