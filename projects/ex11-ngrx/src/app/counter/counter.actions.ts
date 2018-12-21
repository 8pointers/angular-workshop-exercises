import { Action } from '@ngrx/store';

export enum ActionTypes {
  Increment = 'Increment'
}

export class Increment implements Action {
  readonly type = ActionTypes.Increment;
}
