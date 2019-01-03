import { Action } from '@ngrx/store';

export enum ActionTypes {
  Increment = 'Increment',
  Decrement = 'Decrement'
}

export class Increment implements Action {
  readonly type = ActionTypes.Increment;
}

export class Decrement implements Action {
  readonly type = ActionTypes.Decrement;
}

export type ActionsUnion = Increment | Decrement;
