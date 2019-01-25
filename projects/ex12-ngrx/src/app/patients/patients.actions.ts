import { Action } from '@ngrx/store';

export enum ActionTypes {
  ChangeOrder = '[Patients] ChangeOrder',
  Toggle = '[Patient] Toggle',
  AddWeight = '[Patient] addWeight',
  AddHeight = '[Patient] AddHeight'
}
export class ChangeOrder implements Action {
  readonly type = ActionTypes.ChangeOrder;
  constructor(public payload: { orderBy: string }) {}
}
export class Toggle implements Action {
  readonly type = ActionTypes.Toggle;
  constructor(public payload: { id: number }) {}
}

export class AddWeight implements Action {
  readonly type = ActionTypes.AddWeight;
  constructor(public payload: { id: number; delta: number }) {}
}

export class AddHeight implements Action {
  readonly type = ActionTypes.AddHeight;
  constructor(public payload: { id: number; delta: number }) {}
}

export type ActionsUnion = ChangeOrder | Toggle | AddWeight | AddHeight;
