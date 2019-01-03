const run = () => {
  const interval = timeInMillis => subscriber => {
    let counter = 0;
    const myInterval = setInterval(() => subscriber.next(counter++), timeInMillis);
    return () => clearInterval(myInterval);
  };

  const filter = fn => observable => subscriber => {
    return observable({
      next: x => fn(x) && subscriber.next(x),
      error: e => subscriber.error(e),
      complete: subscriber.complete()
    });
  };

  const counter$ = filter(i => i % 2 === 0)(interval(1000));

  const unsubscribe = counter$({
    next: value => console.log('filter', 'next', value),
    error: error => console.log('filter', 'error', error),
    complete: () => console.log('filter', 'complete')
  });

  setTimeout(unsubscribe, 5000);
};
export default run;
