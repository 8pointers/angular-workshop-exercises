import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, flatMap, map } from 'rxjs/operators';
import { ActionTypes, Failure, Success } from './motd.actions';

@Injectable()
export class MotdEffects {
  @Effect()
  refresh$: Observable<Action> = this.actions$.pipe(
    ofType(ActionTypes.Refresh),
    flatMap(() => this.http.get<string>('/api/motd')),
    map(message => new Success(message)),
    catchError(() => of(new Failure('remoteError')))
  );

  constructor(private http: HttpClient, private actions$: Actions) {}
}
