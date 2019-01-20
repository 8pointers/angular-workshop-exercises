import { fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { debounceTime, map, startWith, switchMap } from 'rxjs/operators';

const run = () => {
  const suggestions$ = fromEvent(document.getElementById('autosuggest-search'), 'keyup').pipe(
    map(e => e.target.value),
    startWith(''),
    debounceTime(250),
    map(queryString => `https://swapi.co/api/people/?search=${queryString}`),
    switchMap(url => ajax.getJSON(url)),
    map(response => response.results.map(person => person.name))
  );

  suggestions$.subscribe(
    value => (document.getElementById('autosuggest-results').innerHTML = value.map(name => `<li>${name}</li>`).join('')),
    error => console.log('rxjs/autosuggest', 'error', error),
    () => console.log('rxjs/autosuggest', 'complete')
  );
};
export default run;
