const run = () => {
  const processEvent = (...args) => console.log(...args);

  document.addEventListener('click', e => processEvent('click', e));

  let counter = 0;
  setInterval(() => processEvent('counter', counter++), 1000);

  fetch('https://api.ipify.org')
    .then(response => response.text())
    .then(
      ip => {
        processEvent('ip', 'success', ip);
      },
      reason => processEvent('ip', 'failure', reason)
    );
};
export default run;
