const run = () => {
  const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x);

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

  // const counter$ = map(i => `Hello ${i}`)(map(i => 2 * i)(interval(1000)));
  const counter$ = pipe(
    map(i => 2 * i),
    map(i => `Hello ${i}`)
  )(interval(1000));

  const unsubscribe = counter$({
    next: value => console.log('pipe', 'next', value),
    error: error => console.log('pipe', 'error', error),
    complete: () => console.log('pipe', 'complete')
  });

  setTimeout(unsubscribe, 5000);
};
export default run;
