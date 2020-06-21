import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { Refresh } from './motd.actions';

@Component({
  selector: 'app-motd',
  template: `
    <div>
      <button (click)="refresh()">Refresh</button> <br />
      <div *ngIf="isLoading$ | async as isLoading; else message">
        Loading...
      </div>
      <ng-template #message>{{ message$ | async }}</ng-template>
    </div>
  `
})
export class MotdComponent implements OnInit {
  isLoading$: Observable<boolean>;
  message$: Observable<String>;

  constructor(private store: Store<any>) {
    const message$ = store.pipe(select('message'));
    this.isLoading$ = message$.pipe(pluck('isLoading'));
    this.message$ = message$.pipe(pluck('message'));
  }

  ngOnInit(): void {
    this.refresh();
  }

  refresh() {
    this.store.dispatch(new Refresh());
  }
}
