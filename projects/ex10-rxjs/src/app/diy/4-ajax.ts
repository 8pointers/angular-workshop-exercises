const run = () => {
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

  const ip$ = ajax('https://api.ipify.org');

  const unsubscribe = ip$({
    next: value => console.log('ajax', 'next', value),
    error: error => console.log('ajax', 'error', error),
    complete: () => console.log('ajax', 'complete')
  });

  setTimeout(unsubscribe, 5000);
};
export default run;
