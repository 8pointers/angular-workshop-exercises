import { Action } from '@ngrx/store';

export enum ActionTypes {
  Refresh = 'Refresh',
  Success = 'Success',
  Failure = 'Failure'
}

export class Refresh implements Action {
  readonly type = ActionTypes.Refresh;
}

export class Success implements Action {
  readonly type = ActionTypes.Success;
  constructor(public message: String) {}
}

export class Failure implements Action {
  readonly type = ActionTypes.Failure;
  constructor(public reason: String) {}
}

export type ActionsUnion = Refresh | Success | Failure;
