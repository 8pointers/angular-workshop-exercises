const run = () => {
  const fromEvent = (element, type) => subscriber => {
    const handler = e => subscriber.next(e);
    element.addEventListener(type, handler);
    return () => element.removeEventListener(type, handler);
  };

  const click$ = fromEvent(document, 'click');

  const unsubscribe = click$({
    next: value => console.log('fromEvent', 'next', value),
    error: error => console.log('fromEvent', 'error', error),
    complete: () => console.log('fromEvent', 'complete')
  });

  setTimeout(unsubscribe, 5000);
};
export default run;
