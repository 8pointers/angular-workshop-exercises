const run = () => {
  const interval = timeInMillis => subscriber => {
    let counter = 0;
    const myInterval = setInterval(() => subscriber.next(counter++), timeInMillis);
    return () => clearInterval(myInterval);
  };

  const map = fn => observable => subscriber => {
    return observable({
      next: x => subscriber.next(fn(x)),
      error: e => subscriber.error(e),
      complete: () => subscriber.complete()
    });
  };

  const clock$ = map(() => new Date().toLocaleTimeString())(interval(1000));

  const unsubscribe = clock$({
    next: value => console.log('map', 'next', value),
    error: error => console.log('map', 'error', error),
    complete: () => console.log('map', 'complete')
  });

  setTimeout(unsubscribe, 5000);
};
export default run;
