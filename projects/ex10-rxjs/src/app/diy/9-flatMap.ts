const run = () => {
  const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x);

  const interval = timeInMillis => subscriber => {
    let counter = 0;
    const myInterval = setInterval(() => subscriber.next(counter++), timeInMillis);
    return () => clearInterval(myInterval);
  };

  const ajax = url => subscriber => {
    const controller = new AbortController();
    fetch(url, { signal: controller.signal })
      .then(response => response.text())
      .then(
        result => {
          subscriber.next(result);
          subscriber.complete();
        },
        reason => subscriber.error(reason)
      );
    return () => controller.abort();
  };

  const take = n => observable => subscriber => {
    const unsubscribe = observable({
      next: x => {
        subscriber.next(x);
        if (--n === 0) {
          unsubscribe();
          subscriber.complete();
        }
      },
      error: e => subscriber.error(e),
      complete: () => subscriber.complete()
    });
    return unsubscribe;
  };

  const flatMap = fn => observable => subscriber => {
    let unsubscribe;
    let completed = false;
    return observable({
      next: x => {
        unsubscribe && unsubscribe();
        const o = fn(x);
        unsubscribe = o({
          next: x => subscriber.next(x),
          error: e => subscriber.error(e),
          complete: () => completed && subscriber.complete()
        });
      },
      error: e => subscriber.error(e),
      complete: () => (completed = true)
    });
  };

  const motd$ = pipe(
    take(5),
    flatMap(() => ajax('https://694y9v59lf.execute-api.eu-west-2.amazonaws.com/latest/motd'))
  )(interval(1000));

  motd$({
    next: value => console.log('flatMap', 'next', value),
    error: error => console.log('flatMap', 'error', error),
    complete: () => console.log('flatMap', 'complete')
  });
};
export default run;
