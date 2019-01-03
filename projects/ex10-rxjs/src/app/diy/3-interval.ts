const run = () => {
  const interval = timeInMillis => subscriber => {
    let counter = 0;
    const myInterval = setInterval(() => subscriber.next(counter++), timeInMillis);
    return () => clearInterval(myInterval);
  };

  const interval$ = interval(1000);

  const unsubscribe = interval$({
    next: value => console.log('interval', 'next', value),
    error: error => console.log('interval', 'error', error),
    complete: () => console.log('interval', 'complete')
  });

  setTimeout(unsubscribe, 5000);
};
export default run;
