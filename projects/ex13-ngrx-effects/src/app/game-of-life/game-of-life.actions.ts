import { Action } from '@ngrx/store';

export enum ActionTypes {
  Toggle = 'Toggle',
  Tick = 'Tick'
}

export class Toggle implements Action {
  readonly type = ActionTypes.Toggle;
  constructor(public row: number, public column: number) {}
}

export class Tick implements Action {
  readonly type = ActionTypes.Tick;
}

export type ActionsUnion = Toggle | Tick;
