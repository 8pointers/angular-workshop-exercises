import { Component, Input, OnChanges } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { endWith, map, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-countdown',
  template: `{{ countdown$ | async }}`
})
export class CountdownComponent implements OnChanges {
  @Input()
  to: Date;
  countdown$: Observable<number | string>;
  ngOnChanges(): void {
    this.countdown$ = timer(0, 1000).pipe(
      map(() => Math.floor((this.to.getTime() - Date.now()) / 1000)),
      takeWhile(value => value > 0),
      endWith(`Time's up!`)
    );
  }
}
